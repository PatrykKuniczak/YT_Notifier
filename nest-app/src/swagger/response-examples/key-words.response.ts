import { ApiProperty } from '@nestjs/swagger';

export class KeyWordsResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'amazing word' })
  content: string;

  @ApiProperty({ example: 1 })
  userId: number;
}
