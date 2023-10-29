import { youtube, youtube_v3 } from '@googleapis/youtube';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OAuth2Client } from 'google-auth-library';
import { Repository } from 'typeorm';
import { OAUTH2_GOOGLE_CLIENT } from '../auth/oauth2.module';
import { UserYtVideosEntity } from './model/user-yt-videos.entity';

@Injectable()
export class UserYtVideosService {
  youtubeClient: youtube_v3.Youtube;

  constructor(
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    @InjectRepository(UserYtVideosEntity)
    private readonly ytVideosRepository: Repository<UserYtVideosEntity>,
  ) {
    this.youtubeClient = youtube({ version: 'v3', auth: this.oAuth2GoogleClient });
  }

  async findAll(userId: number) {
    const user = await this.findOneByUserId(userId);

    console.log(user);

    //   if (keywordsResult.length) {
    //     try {
    //       const keywords = await Promise.all(
    //         keywordsResult.map(({ content }) =>
    //           this.youtubeClient.search.list({
    //             part: ['snippet'],
    //             maxResults: 10,
    //             order: 'date',
    //             // publishedAfter: lastFetch.toISOString(),
    //             q: content,
    //             type: ['video'],
    //           }),
    //         ),
    //       );
    //
    //       const rawObjectForResponse = await Promise.all(
    //         keywords.map(async (keyword, index) => {
    //           if (keyword.data.items.length) {
    //             const channelId = keyword.data.items[index].snippet.channelId;
    //             const channelResult = await this.youtubeClient.channels.list({ id: [channelId], part: ['snippet'] });
    //
    //             return {
    //               video: {
    //                 id: keyword.data.items[index].id.videoId,
    //                 title: keyword.data.items[index].snippet.title,
    //                 description: keyword.data.items[index].snippet.description,
    //                 publishedAt: keyword.data.items[index].snippet.publishedAt,
    //                 thumbnail: keyword.data.items[index].snippet.thumbnails.medium.url,
    //               },
    //               channel: {
    //                 id: channelId,
    //                 title: channelResult.data.items[0].snippet.title,
    //                 thumbnail: channelResult.data.items[0].snippet.thumbnails.default.url,
    //               },
    //             };
    //           }
    //         }),
    //       );
    //
    //       return rawObjectForResponse.filter(keyword => keyword);
    //     } catch (err) {
    //       if ((err.status === 403 && err.errors[0].domain === 'youtube.quota') || err.status === 429) {
    //         throw new ForbiddenException('You reach the requests limit for youtube');
    //       }
    //
    //       throw err;
    //     }
    //   }
  }

  async findOneByUserId(userId: number) {
    return this.ytVideosRepository.findOne({
      relations: { user: true },
      where: { user: { id: userId } },
    });
  }

  // async updateWatchLater(userId: number, videoId: string) {
  //   let playlistId: string;
  //
  //   const userPlaylistResult = await this.usersService.getPlaylistId(userId);
  //
  //   if (!userPlaylistResult) {
  //     const result = await this.youtubeClient.playlists.insert({
  //       part: ['snippet'],
  //       requestBody: { snippet: { description: 'Example description', title: 'Example title' } },
  //     });
  //
  //     playlistId = result.data.id;
  //     await this.usersService.updatePlaylistId(userId, playlistId);
  //   } else {
  //     playlistId = userPlaylistResult.playlistId;
  //   }
  //
  //   const playlistItems = await this.youtubeClient.playlistItems.list({ part: ['snippet'], playlistId });
  //
  //   const videoExistsInPlaylist = playlistItems.data.items.some(
  //     playlistItem => playlistItem.snippet.resourceId.videoId === videoId,
  //   );
  //
  //   if (videoExistsInPlaylist) {
  //     throw new ConflictException('Video already exists in playlist');
  //   }
  //
  //   await this.youtubeClient.playlistItems.insert({
  //     part: ['snippet'],
  //     requestBody: {
  //       snippet: {
  //         playlistId,
  //         resourceId: { kind: 'youtube#video', videoId },
  //       },
  //     },
  //   });
  // }

  // async updatePlaylistId(id: number, playlistId: string) {
  //   const { affected } = await this.userRepository.update({ id }, { playlistId });
  //
  //   return !!affected;
  // }

  // async updateLastFetchDate(userId: number) {
  //   const { affected } = await this.userRepository.update({ id: userId }, { lastFetch: new Date() }).catch(err => {
  //     throw new InternalServerErrorException('Error on updating fetch date of user: ' + err.message);
  //   });
  //
  //   return !!affected;
  // }
}
