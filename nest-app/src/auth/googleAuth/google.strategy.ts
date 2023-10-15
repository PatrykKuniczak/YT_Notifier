import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { UsersService } from '../../user/user.service';
import { IProfile } from '../../user/user.types';
import { GOOGLE_REDIRECT_URL } from '../../constants';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService, private readonly userService: UsersService) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: GOOGLE_REDIRECT_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string | undefined, profile: IProfile, done: VerifyCallback) {
    const email = profile.emails.find(email => email.verified);

    if (!email) {
      done(new UnauthorizedException('No verified email returned from Google Authorization!'), null);
    }

    const { id } = await this.userService.findOrCreate(refreshToken, profile);

    done(null, { id, accessToken });
  }
}
