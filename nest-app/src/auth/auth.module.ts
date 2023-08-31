import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {GoogleStrategy} from './googleAuth/google.strategy';
import {SessionSerializer} from './session/session.serializer';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {SessionService} from "./session/session.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SessionEntity} from "./session/session.entity";


@Module({
    imports: [PassportModule, UserModule, TypeOrmModule.forFeature([SessionEntity])],
    providers: [GoogleStrategy, SessionSerializer, SessionService],
    controllers: [AuthController]
})
export class AuthModule {
}
