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
        private readonly userService: UsersService
    ) {
        super({
            clientID: configService.get('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: configService.get('GOOGLE_CALLBACK_URL'),
            scope: ['email', 'profile'],
        });

    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: IProfile,
        done: VerifyCallback
    ) {
        const email = profile.emails.find((x) => x.verified);

        if (!email) {
            done(new UnauthorizedException('No verified email returned from Google Authorization!'), null);
        }

        const {id} = await this.userService.validateUser(
            refreshToken,
            profile
        )

        done(null, {id, accessToken});
    }
}
