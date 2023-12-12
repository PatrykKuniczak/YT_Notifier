import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { EAGER_TIME_TO_REFRESH_ACCESS_TOKEN } from '../../constants';
import { UsersService } from '../../users/users.service';
import { OAUTH2_GOOGLE_CLIENT } from '../oauth2.module';
import { SessionsService } from './sessions.service';

@Injectable()
export class SessionsGuard implements CanActivate {
  constructor(
    private readonly sessionService: SessionsService,
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const sessionExists = !!(await this.sessionService.findById(request.session.id));

    if (!sessionExists) {
      throw new UnauthorizedException({ reason: 'Unauthorized', cause: 'unauthorized' });
    }

    const { refreshToken } = await this.usersService.getRefreshTokenById(request.session.passport.user.id);

    await this.assignCurrentUserToOAuth2Client(request, refreshToken);

    return sessionExists;
  }

  private async assignCurrentUserToOAuth2Client(request: Request, refreshToken: string) {
    await this.oAuth2GoogleClient
      .getTokenInfo(request.session.passport.user.accessToken)
      .then(async tokenInfo => {
        if (new Date(tokenInfo.expiry_date - EAGER_TIME_TO_REFRESH_ACCESS_TOKEN) < new Date()) {
          await this.refreshAccessToken(request, refreshToken);
        }
      })
      .catch(async err => {
        if (err.response.data.error === 'invalid_token') {
          await this.refreshAccessToken(request, refreshToken);
        }
      });

    this.oAuth2GoogleClient.setCredentials({
      refresh_token: refreshToken,
      access_token: request.session.passport.user.accessToken,
    });
  }

  private async refreshAccessToken(request: Request, refreshToken: string) {
    this.oAuth2GoogleClient.setCredentials({ refresh_token: refreshToken });

    try {
      const { credentials } = await this.oAuth2GoogleClient.refreshAccessToken();
      request.session.passport.user.accessToken = credentials.access_token;
    } catch (err) {
      if (err.response.data.error === 'invalid_grant') {
        throw new UnauthorizedException({ reason: 'Unauthorized', cause: 'unauthorized' });
      }
    }
  }
}
