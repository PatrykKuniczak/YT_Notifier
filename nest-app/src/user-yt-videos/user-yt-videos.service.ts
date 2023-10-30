import { youtube, youtube_v3 } from '@googleapis/youtube';
import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuth2Client } from 'google-auth-library';
import { Repository } from 'typeorm';
import { OAUTH2_GOOGLE_CLIENT } from '../auth/oauth2.module';
import { UpdateUserYtVideosDto } from './dto/update-user-yt-videos.dto';
import { UserYtVideosEntity } from './model/user-yt-videos.entity';

@Injectable()
export class UserYtVideosService {
  youtubeClient: youtube_v3.Youtube;

  constructor(
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    @InjectRepository(UserYtVideosEntity)
    private readonly userYtVideosRepository: Repository<UserYtVideosEntity>,
  ) {
    this.youtubeClient = youtube({ version: 'v3', auth: this.oAuth2GoogleClient });
  }

  async findAll(userId: number) {
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

        const rawObjectForResponse = await Promise.all(
          keywordsQueryResult.map(async (queryResultKeyword, index) => {
            if (queryResultKeyword.data.items.length && queryResultKeyword.data.items[index]) {
              const channelId = queryResultKeyword.data.items[index].snippet.channelId;
              const channelResult = await this.youtubeClient.channels.list({ id: [channelId], part: ['snippet'] });

              return {
                video: {
                  id: queryResultKeyword.data.items[index].id.videoId,
                  title: queryResultKeyword.data.items[index].snippet.title,
                  description: queryResultKeyword.data.items[index].snippet.description,
                  publishedAt: queryResultKeyword.data.items[index].snippet.publishedAt,
                  thumbnail: queryResultKeyword.data.items[index].snippet.thumbnails.medium.url,
                },
                channel: {
                  id: channelId,
                  title: channelResult.data.items[0].snippet.title,
                  thumbnail: channelResult.data.items[0].snippet.thumbnails.default.url,
                },
              };
            }
          }),
        );

        await this.updateLastFetchDate(userId);

        return rawObjectForResponse.filter(keyword => keyword);
      } catch (err) {
        if ((err.status === 403 && err.errors[0].domain === 'youtube.quota') || err.status === 429) {
          throw new ForbiddenException('You reach the requests limit for youtube');
        }

        throw err;
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

    const userPlaylistResult = await this.userYtVideosRepository.findOneBy({ user: { id: userId } });

    if (!userPlaylistResult.playlistId) {
      const result = await this.youtubeClient.playlists.insert({
        part: ['snippet'],
        requestBody: { snippet: { title, description } },
      });

      playlistId = result.data.id;
      await this.userYtVideosRepository.update({ user: { id: userId } }, { playlistId });
    } else {
      playlistId = userPlaylistResult.playlistId;
    }

    const playlistItems = await this.youtubeClient.playlistItems.list({ part: ['snippet'], playlistId });

    const videoExistsInPlaylist = playlistItems.data.items.some(
      playlistItem => playlistItem.snippet.resourceId.videoId === videoId,
    );

    if (videoExistsInPlaylist) {
      throw new ConflictException('Video already exists in playlist');
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
      .catch(err => {
        if (err.status === 404) {
          throw new NotFoundException('Video not found');
        }
      });
  }

  private async updateLastFetchDate(userId: number) {
    return this.userYtVideosRepository.update({ user: { id: userId } }, { lastFetch: new Date() }).catch(err => {
      throw new InternalServerErrorException('Error on updating fetch date of user: ' + err.message);
    });
  }
}
