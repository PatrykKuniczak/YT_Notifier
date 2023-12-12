import { Global, Module } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_REDIRECT_URL } from '../constants';

export const OAUTH2_GOOGLE_CLIENT = 'OAUTH2_GOOGLE_CLIENT';

const oAuth2GoogleClientProvider: FactoryProvider<OAuth2Client> = {
  provide: OAUTH2_GOOGLE_CLIENT,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) =>
    new OAuth2Client({
      clientId: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      redirectUri: GOOGLE_REDIRECT_URL,
    }),
};

@Global()
@Module({
  providers: [oAuth2GoogleClientProvider],
  exports: [oAuth2GoogleClientProvider],
})
export class OAuth2Module {}
