import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from '../../user/user.service';
import { OAUTH2_GOOGLE_CLIENT } from '../oauth2.module';
import { SessionService } from './session.service';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(
    private readonly sessionService: SessionService,
    @Inject(OAUTH2_GOOGLE_CLIENT) private readonly oAuth2GoogleClient: OAuth2Client,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { refreshToken } = await this.usersService.getRefreshTokenById(request.session.passport.user.id);

    await this.oAuth2GoogleClient.getTokenInfo(request.session.passport.user.accessToken).catch(async err => {
      if (err.response.data.error === 'invalid_token') {
        this.oAuth2GoogleClient.setCredentials({ refresh_token: refreshToken });
        const { credentials } = await this.oAuth2GoogleClient.refreshAccessToken();
        request.session.passport.user.accessToken = credentials.access_token;
      }
    });

    this.oAuth2GoogleClient.setCredentials({
      refresh_token: refreshToken,
      access_token: request.session.passport.user.accessToken,
    });

    const result = !!(await this.sessionService.findById(request.session.id));

    if (!result) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
