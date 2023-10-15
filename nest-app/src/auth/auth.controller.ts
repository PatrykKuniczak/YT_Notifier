import {
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpException,
	Inject,
	InternalServerErrorException,
	Post,
	Req,
	Res,
	UseGuards
} from '@nestjs/common';
import {
	ApiExcludeEndpoint,
	ApiInternalServerErrorResponse,
	ApiOAuth2,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { SESSION_COOKIE_NAME } from '../constants';
import { UsersService } from '../user/user.service';
import { GoogleAuthGuard } from './googleAuth/google.guard';
import {
	OAuth2GoogleClientCredentials,
	TOAuth2GoogleClientCredentials
} from './oauth2.module';
import { SessionGuard } from './session/session.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(
		private readonly userService: UsersService,
		@Inject(OAuth2GoogleClientCredentials)
		private readonly oAuth2GoogleClientCredentials: TOAuth2GoogleClientCredentials
	) {}

	@ApiOperation({
		summary:
			"Works only when it's opened as window/chrome tab, don't work with postman/axios or etc."
	})
	@ApiOkResponse()
	@ApiUnauthorizedResponse({
		description:
			"Could have optional message: 'No verified email returned from Google Authorization!'"
	})
	@ApiInternalServerErrorResponse({
		description:
			"Error could occur when server can't update refresh token: 'Error on updating user'"
	})
	@Get('login')
	@UseGuards(GoogleAuthGuard)
	async login() {}

	@ApiExcludeEndpoint()
	@ApiOkResponse()
	@Get('redirect')
	@UseGuards(GoogleAuthGuard)
	async handleRedirect(@Res({ passthrough: true }) res: Response) {
		const htmlContent =
			'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Redirect</title></head><body><script>window.close();</script></body></html>';

		res.status(200).send(htmlContent);
	}

	@ApiOAuth2([])
	@ApiUnauthorizedResponse()
	@ApiInternalServerErrorResponse({
		description: 'Error on destroying session: {Error message}'
	})
	@ApiOkResponse()
	@Post('logout')
	@UseGuards(SessionGuard)
	async logout(@Req() req: Request, @Res() res: Response) {
		req.logout(
			(err: HttpException) =>
				err &&
				res
					.clearCookie(SESSION_COOKIE_NAME)
					.status(500)
					.send('Error on destroying session: ' + err.message)
		);

		return res.clearCookie(SESSION_COOKIE_NAME).sendStatus(200);
	}

	@ApiOAuth2([])
	@ApiUnauthorizedResponse()
	@ApiOkResponse()
	@Post('me')
	@HttpCode(200)
	@UseGuards(SessionGuard)
	async getCurrentUser(@Req() req: Request) {
		return this.userService.findOneById(req.session.passport.user.id);
	}

	@ApiOAuth2([])
	@ApiUnauthorizedResponse()
	@ApiInternalServerErrorResponse({
		description:
			'Error on deleting user profile {error message}, but the message is optional'
	})
	@ApiOkResponse()
	@Delete('remove-account')
	@UseGuards(SessionGuard)
	async removeAccount(@Req() req: Request, @Res() res: Response) {
		const userId = req.session.passport.user.id;
		const { refreshToken } = await this.userService.getRefreshTokenById(userId);

		const oAuth2Client = new OAuth2Client({
			...this.oAuth2GoogleClientCredentials
		});
		const revokeResult = await oAuth2Client.revokeToken(refreshToken);

		if (revokeResult.status === 200) {
			const deleteResult = await this.userService.delete(userId);

			if (!deleteResult.affected) {
				throw new InternalServerErrorException(
					'Error on deleting user profile'
				);
			}
		} else {
			throw new InternalServerErrorException('Error on deleting user profile');
		}

		return this.logout(req, res);
	}
}
