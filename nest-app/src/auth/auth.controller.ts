import {
  Controller,
  Delete,
  Get,
  HttpException,
  Inject,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  Session,
  UseGuards,
} from '@nestjs/common';
import {
  ApiExcludeEndpoint,
  ApiInternalServerErrorResponse,
  ApiOAuth2,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { SessionData } from 'express-session';
import { OAuth2Client } from 'google-auth-library';
import { SESSION_COOKIE_NAME } from '../constants';
import { AuthResponse } from '../swagger/response-examples/auth.response';
import { ErrorResponse } from '../swagger/response-examples/error.response';
import { ReqUserId } from '../users/decorators/user.decorator';
import { UsersService } from '../users/users.service';
import { GoogleAuthGuard } from './googleAuth/google.guard';
import { OAUTH2_GOOGLE_CLIENT } from './oauth2.module';
import { SessionsGuard } from './sessions/sessions.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(OAUTH2_GOOGLE_CLIENT)
    private readonly oAuth2GoogleClient: OAuth2Client,
  ) {}

  @ApiOperation({
    summary: "Works only when it's opened as window/chrome tab, don't work with postman/axios or etc.",
  })
  @ApiOkResponse()
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description:
      "Could have message: 'No verified email returned from Google Authorization!', then cause: unconfirmed_email, normally cause: unauthorized",
  })
  @ApiInternalServerErrorResponse({
    description: "Error could occur when server can't update refresh token: 'Error on updating user'",
  })
  @Get('login')
  @UseGuards(GoogleAuthGuard)
  async login() {}

  @ApiExcludeEndpoint()
  @ApiOkResponse()
  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect(
    @Res({ passthrough: true }) res: Response,
    @Session()
    session: Omit<SessionData, 'cookie.secure'> & { cookie: { secure: boolean } },
  ) {
    const htmlContent =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Redirect</title></head><body><script>window.close();</script></body></html>';

    res.cookie(SESSION_COOKIE_NAME, session.id, session.cookie);
    res.status(200).send(htmlContent);
  }

  @ApiOAuth2([])
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error on destroying session: {Error message}',
  })
  @ApiOkResponse()
  @Post('logout')
  @UseGuards(SessionsGuard)
  async logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err: HttpException) => err && res.status(500).send('Error on destroying session: ' + err.message));

    return res.clearCookie(SESSION_COOKIE_NAME).sendStatus(200);
  }

  @ApiOAuth2([])
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @ApiOkResponse({ type: AuthResponse })
  @Get('me')
  @UseGuards(SessionsGuard)
  async getCurrentUser(@ReqUserId() userId: number) {
    return this.usersService.findOneById(userId);
  }

  @ApiOAuth2([])
  @ApiUnauthorizedResponse({
    type: ErrorResponse,
    description: 'cause: unauthorized',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error on deleting user profile {error message}, but the message is optional',
  })
  @ApiOkResponse()
  @Delete('remove-account')
  @UseGuards(SessionsGuard)
  async removeAccount(@ReqUserId() userId: number, @Req() req: Request, @Res() res: Response) {
    const { refreshToken } = await this.usersService.getRefreshTokenById(userId);

    const revokeResult = await this.oAuth2GoogleClient.revokeToken(refreshToken);

    if (revokeResult.status === 200) {
      const deleteResult = await this.usersService.delete(userId);

      if (!deleteResult.affected) {
        throw new InternalServerErrorException('Error on deleting user profile');
      }
    } else {
      throw new InternalServerErrorException('Error on deleting user profile');
    }

    return this.logout(req, res);
  }
}
