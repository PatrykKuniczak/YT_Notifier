import { ApiProperty } from '@nestjs/swagger';

export class ErrorLogsResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({
    example:
      '{"query":"INSERT INTO "key-word"("content", "userId") VALUES (DEFAULT, DEFAULT) RETURNING "id"","parameters":[]}',
  })
  message: string;

  @ApiProperty({ example: 1 })
  userId: number;
}
