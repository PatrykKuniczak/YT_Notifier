import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import {Strategy, VerifyCallback} from 'passport-google-oauth20';
import {UsersService} from '../../user/user.service';
import {IProfile} from '../../user/user.types';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) {
        super({
            clientID: configService.get('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: '/api/auth/redirect',
            scope: ['email', 'profile'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string | undefined,
        profile: IProfile,
        done: VerifyCallback
    ) {
        const email = profile.emails.find((email) => email.verified);

        if (!email) {
            done(new UnauthorizedException('No verified email returned from Google Authorization!'), null);
        }

        const {id} = await this.userService.validateUser(
            refreshToken,
            profile
        );

        done(null, {id, accessToken});
    }
}
