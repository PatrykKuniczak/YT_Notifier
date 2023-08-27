import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {GoogleStrategy} from './googleAuth/google.strategy';
import {SessionSerializer} from './session/session.serializer';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";


@Module({
    imports: [PassportModule, UserModule],
    providers: [GoogleStrategy, SessionSerializer],
    controllers: [AuthController]
})
export class AuthModule {
}
