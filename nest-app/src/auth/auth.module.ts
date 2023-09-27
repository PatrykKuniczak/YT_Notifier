import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {GoogleStrategy} from './googleAuth/google.strategy';
import {SessionSerializer} from './session/session.serializer';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {SessionService} from "./session/session.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SessionEntity} from "./session/session.entity";
import {OAuth2Client} from "google-auth-library";

const oAuth2GoogleProvider = {
    provide: 'OAUTH2GOOGLE',
    inject: [GoogleStrategy],
    useFactory: (googleStrategy: GoogleStrategy) => new OAuth2Client(
        googleStrategy['_oauth2']['_clientId'],
        googleStrategy['_oauth2']['_clientSecret'],
        googleStrategy['_callbackURL'])
};

@Module({
    imports: [PassportModule, UserModule, TypeOrmModule.forFeature([SessionEntity]), UserModule],
    providers: [GoogleStrategy, SessionSerializer, SessionService, oAuth2GoogleProvider],
    controllers: [AuthController]
})
export class AuthModule {
}
