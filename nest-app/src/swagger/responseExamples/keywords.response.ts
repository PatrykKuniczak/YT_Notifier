import { ApiProperty } from '@nestjs/swagger';

class KeywordsVideoResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ example: '2023-10-30T19:21:20Z' })
  publishedAt: Date;

  @ApiProperty({ example: 'https://i.ytimg.com/vi/no8pm-VM2h4/mqdefault.jpg' })
  thumbnail: string;
}

class KeywordsChannelResponse {
  @ApiProperty({ example: 'UCVxkdxpvBaXPgBquxO_YRew' })
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({
    example:
      'https://yt3.ggpht.com/ytc/APkrFKZe9AatvAP7M4WMdSYLq_925LmKy0zCZLbUdnmYaDf3fjtwMUzWhqIPISnK2j01=s88-c-k-c0x00ffffff-no-rj',
  })
  thumbnail: string;
}

export class KeywordsResponse {
  @ApiProperty()
  video: KeywordsVideoResponse;

  @ApiProperty()
  channel: KeywordsChannelResponse;
}