import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { GoogleAuthGuard } from './googleAuth/google.guard';
import { GoogleStrategy } from './googleAuth/google.strategy';
import { SessionEntity } from './session/session.entity';
import { SessionGuard } from './session/session.guard';
import { SessionSerializer } from './session/session.serializer';
import { SessionService } from './session/session.service';

@Module({
  imports: [PassportModule, UserModule, TypeOrmModule.forFeature([SessionEntity]), UserModule],
  providers: [GoogleStrategy, GoogleAuthGuard, SessionSerializer, SessionService, SessionGuard],
  controllers: [AuthController],
  exports: [SessionService],
})
export class AuthModule {}
