import { ApiProperty } from '@nestjs/swagger';

class VideoResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Pool party with Anne' })
  title: string;

  @ApiProperty({ example: 'description from video' })
  description: string;

  @ApiProperty({ example: '2023-10-30T19:21:20Z' })
  publishedAt: Date;

  @ApiProperty({ example: 'https://i.ytimg.com/vi/no8pm-VM2h4/mqdefault.jpg' })
  thumbnail: string;
}

class ChannelResponse {
  @ApiProperty({ example: 'UCVxkdxpvBaXPgBquxO_YRew' })
  id: string;

  @ApiProperty({ example: 'awkward title' })
  title: string;

  @ApiProperty({
    example:
      'https://yt3.ggpht.com/ytc/APkrFKZe9AatvAP7M4WMdSYLq_925LmKy0zCZLbUdnmYaDf3fjtwMUzWhqIPISnK2j01=s88-c-k-c0x00ffffff-no-rj',
  })
  thumbnail: string;
}

export class UserYtVideosResponse {
  @ApiProperty()
  video: VideoResponse;

  @ApiProperty()
  channel: ChannelResponse;
}
