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
import { DEFAULT_FETCH_DATE } from '../constants';
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
              publishedAfter: (lastFetch || DEFAULT_FETCH_DATE).toISOString(),
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

              const { data: videoStatisticsData } = await this.youtubeClient.videos.list({
                id: [videoData.items[index].id.videoId],
                part: ['statistics'],
              });

              return {
                video: {
                  id: videoData.items[index].id.videoId,
                  title: videoData.items[index].snippet.title,
                  description: videoData.items[index].snippet.description,
                  publishedAt: videoData.items[index].snippet.publishedAt,
                  thumbnail: videoData.items[index].snippet.thumbnails.medium.url,
                  views: +videoStatisticsData.items[0].statistics.viewCount,
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

      await this.youtubeClient.playlistItems
        .list({
          part: ['snippet'],
          playlistId,
        })
        .then(res => (playlistData = res.data));
    } catch (err) {
      if (err.status === 404 && err.errors[0].reason === 'playlistNotFound') {
        await this.userYtVideosRepository.update({ user: { id: userId } }, { playlistId: null });
        return this.updatePlaylist(userId, { videoId, title, description });
      }
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

  async checkPlaylist(userId: number) {
    const { playlistId } = await this.userYtVideosRepository.findOneBy({ user: { id: userId } });

    if (playlistId) {
      const {
        data: {
          pageInfo: { totalResults },
        },
      } = await this.youtubeClient.playlists.list({
        part: ['snippet'],
        id: [playlistId],
      });

      if (!totalResults) {
        await this.userYtVideosRepository.update({ user: { id: userId } }, { playlistId: null });
        throw new NotFoundException({ reason: 'Playlist not found', cause: 'playlist_not_found' });
      }

      return;
    }

    throw new NotFoundException({ reason: 'Playlist not found', cause: 'playlist_not_found' });
  }

  private async updateLastFetchDate(userId: number) {
    return this.userYtVideosRepository.update({ user: { id: userId } }, { lastFetch: new Date() }).catch(err => {
      throw new InternalServerErrorException('Error on updating fetch date of user: ' + err.message);
    });
  }

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async handleQuotaLimitFromError(err: { [key: string]: any }, userId: number) {
    if ((err.status === 403 && err.errors[0].domain === 'youtube.quota') || err.status === 429) {
      throw new ForbiddenException({ reason: 'You reach the requests limit for youtube', cause: 'quota_limit' });
    }

    await this.errorLogsService.create({
      message: err.response.data.error.errors[0],
      userId,
    });

    throw err;
  }
}
