import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class CreateKeyWordDto {
  @ApiProperty()
  @Length(3, 255)
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  content: string;
}
