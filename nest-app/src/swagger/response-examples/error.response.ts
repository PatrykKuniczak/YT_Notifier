import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({ example: 'Not Found' })
  reason: string;

  @ApiProperty({ example: 'keyword_not_found' })
  cause: string;
}
