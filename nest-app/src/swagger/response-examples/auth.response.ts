import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Papryk Detox' })
  displayName: string;

  @ApiProperty({ example: 'tomek.atomek@gmail.com' })
  email: string;

  @ApiProperty({
    example: 'https://lh3.googleusercontent.com/a/ACg8ocJaCDsG_wwXRN59xRK4Arqopj0P12ieAyiqpgv82oeC=s96-c',
  })
  avatar: string;
}
