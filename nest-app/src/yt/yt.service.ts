import { youtube, youtube_v3 } from '@googleapis/youtube';
import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { OAUTH2_GOOGLE_CLIENT } from '../auth/oauth2.module';
import { KeyWordsService } from '../key-words/key-words.service';
import { UsersService } from '../user/user.service';

@Injectable()
export class YtService {
  youtubeClient: youtube_v3.Youtube;

  constructor(
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    private readonly usersService: UsersService,
    private readonly keyWordsService: KeyWordsService,
  ) {
    this.youtubeClient = youtube({ version: 'v3', auth: this.oAuth2GoogleClient });
  }

  async findAll(userId: number) {
    const { lastFetch } = await this.usersService.getLastFetchById(userId);

    const keywordsResult = await this.keyWordsService.findAll(userId);

    if (keywordsResult.length) {
      try {
        const keywords = await Promise.all(
          keywordsResult.map(({ content }) =>
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
          keywords.map(async (keyword, index) => {
            if (keyword.data.items.length) {
              const channelId = keyword.data.items[index].snippet.channelId;
              const channelResult = await this.youtubeClient.channels.list({ id: [channelId], part: ['snippet'] });

              return {
                video: {
                  id: keyword.data.items[index].id.videoId,
                  title: keyword.data.items[index].snippet.title,
                  description: keyword.data.items[index].snippet.description,
                  publishedAt: keyword.data.items[index].snippet.publishedAt,
                  thumbnail: keyword.data.items[index].snippet.thumbnails.medium.url,
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

        await this.usersService.updateLastFetchDate(userId);

        return rawObjectForResponse.filter(keyword => keyword);
      } catch (err) {
        if ((err.status === 403 && err.errors[0].domain === 'youtube.quota') || err.status === 429) {
          throw new ForbiddenException('You reach the requests limit for youtube');
        }

        throw err;
      }
    }
  }
}
