import { youtube, youtube_v3 } from '@googleapis/youtube';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { OAuth2Client } from 'google-auth-library';
import { Repository } from 'typeorm';
import { OAUTH2_GOOGLE_CLIENT } from '../auth/oauth2.module';
import { ErrorLogsService } from '../error-logs/error-logs.service';
import { UpdateUserYtVideosDto } from './dto/update-user-yt-videos.dto';
import { UserYtVideosEntity } from './model/user-yt-videos.entity';

@Injectable()
export class UserYtVideosService {
  youtubeClient: youtube_v3.Youtube;

  constructor(
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    @InjectRepository(UserYtVideosEntity)
    private readonly userYtVideosRepository: Repository<UserYtVideosEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly errorLogsService: ErrorLogsService,
  ) {
    this.youtubeClient = youtube({ version: 'v3', auth: this.oAuth2GoogleClient });
  }

  async findAll(userId: number) {
    const dataFromCache = await this.cacheManager.get(userId.toString());

    if (dataFromCache) {
      return dataFromCache;
    }

    const {
      user: {
        keywords,
        userYtVideos: { lastFetch },
      },
    } = await this.findOneByUserId(userId);

    if (keywords.length) {
      try {
        const keywordsQueryResult = await Promise.all(
          keywords.map(({ content }) =>
            this.youtubeClient.search.list({
              part: ['snippet'],
              maxResults: 10,
              order: 'date',
              publishedAfter: lastFetch.toISOString(),
              q: content,
              type: ['video'],
            }),
          ),
        );

        const rawResponseData = await Promise.all(
          keywordsQueryResult.map(async ({ data: videoData }, index) => {
            if (videoData.items.length && videoData.items[index]) {
              const channelId = videoData.items[index].snippet.channelId;
              const { data: channelData } = await this.youtubeClient.channels.list({
                id: [channelId],
                part: ['snippet'],
              });

              return {
                video: {
                  id: videoData.items[index].id.videoId,
                  title: videoData.items[index].snippet.title,
                  description: videoData.items[index].snippet.description,
                  publishedAt: videoData.items[index].snippet.publishedAt,
                  thumbnail: videoData.items[index].snippet.thumbnails.medium.url,
                },
                channel: {
                  id: channelId,
                  title: channelData.items[0].snippet.title,
                  thumbnail: channelData.items[0].snippet.thumbnails.default.url,
                },
              };
            }
          }),
        );

        await this.updateLastFetchDate(userId);

        const filteredResponseData = rawResponseData.filter(Boolean);

        const midnightTimestamp = +new Date().setHours(24, 0, 0, 0);
        const timeToMidnightInMilliseconds = midnightTimestamp - Date.now();

        await this.cacheManager.set(userId.toString(), filteredResponseData, timeToMidnightInMilliseconds);

        return filteredResponseData;
      } catch (err) {
        await this.handleQuotaLimitFromError(err, userId);
      }
    }
  }

  async findOneByUserId(userId: number) {
    return this.userYtVideosRepository.findOne({
      relations: { user: { keywords: true, userYtVideos: true } },
      where: { user: { id: userId } },
    });
  }

  async updatePlaylist(userId: number, { videoId, title, description }: UpdateUserYtVideosDto) {
    let playlistId: string;
    let playlistData: youtube_v3.Schema$PlaylistItemListResponse;

    const userPlaylistResult = await this.userYtVideosRepository.findOneBy({ user: { id: userId } });

    try {
      if (userPlaylistResult.playlistId) {
        playlistId = userPlaylistResult.playlistId;
      } else {
        const result = await this.youtubeClient.playlists.insert({
          part: ['snippet'],
          requestBody: { snippet: { title, description } },
        });

        playlistId = result.data.id;
        await this.userYtVideosRepository.update({ user: { id: userId } }, { playlistId });
      }

      const { data } = await this.youtubeClient.playlistItems.list({ part: ['snippet'], playlistId });
      playlistData = data;
    } catch (err) {
      await this.handleQuotaLimitFromError(err, userId);
    }

    const videoExistsInPlaylist = playlistData.items.some(({ snippet }) => snippet.resourceId.videoId === videoId);

    if (videoExistsInPlaylist) {
      throw new ConflictException({
        reason: 'Video already exists in playlist',
        cause: 'duplicated_video_for_playlist',
      });
    }

    await this.youtubeClient.playlistItems
      .insert({
        part: ['snippet'],
        requestBody: {
          snippet: {
            playlistId,
            resourceId: { kind: 'youtube#video', videoId },
          },
        },
      })
      .catch(async err => {
        if (err.status === 404) {
          throw new NotFoundException({ reason: 'Video not found', cause: 'video_for_playlist_not_found' });
        }

        await this.handleQuotaLimitFromError(err, userId);
      });
  }

  private async updateLastFetchDate(userId: number) {
    return this.userYtVideosRepository.update({ user: { id: userId } }, { lastFetch: new Date() }).catch(err => {
      throw new InternalServerErrorException('Error on updating fetch date of user: ' + err.message);
    });
  }

  private async handleQuotaLimitFromError(err: { [key: string]: unknown }, userId: number) {
    if ((err.status === 403 && err.errors[0].domain === 'youtube.quota') || err.status === 429) {
      throw new ForbiddenException({ reason: 'You reach the requests limit for youtube', cause: 'quota_limit' });
    }

    await this.errorLogsService.create({
      message: Object.assign(err, { errorMessage: err.message }),
      userId,
    });

    throw err;
  }
}
