import { Global, Module } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import { OAuth2ClientOptions } from 'google-auth-library/build/src/auth/oauth2client';
import { ConfigService } from '@nestjs/config';
import { GOOGLE_REDIRECT_URL } from '../constants';

export type TOAuth2GoogleClientCredentials = OAuth2ClientOptions;
export const OAuth2GoogleClientCredentials = 'OAUTH2_GOOGLE_CREDENTIALS';

const oAuth2GoogleClientCredentialsProvider: FactoryProvider<TOAuth2GoogleClientCredentials> =
	{
		provide: OAuth2GoogleClientCredentials,
		inject: [ConfigService],
		useFactory: async (configService: ConfigService) => ({
			clientId: configService.get('GOOGLE_CLIENT_ID'),
			clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
			redirectUri: GOOGLE_REDIRECT_URL
		})
	};

@Global()
@Module({
	providers: [oAuth2GoogleClientCredentialsProvider],
	exports: [oAuth2GoogleClientCredentialsProvider]
})
export class OAuth2Module {}
