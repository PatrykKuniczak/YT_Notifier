import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { GoogleAuthGuard } from './googleAuth/google.guard';
import { GoogleStrategy } from './googleAuth/google.strategy';
import { SessionsEntity } from './sessions/model/sessions.entity';
import { SessionsGuard } from './sessions/sessions.guard';
import { SessionsSerializer } from './sessions/sessions.serializer';
import { SessionsService } from './sessions/sessions.service';

@Global()
@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([SessionsEntity])],
  providers: [GoogleStrategy, GoogleAuthGuard, SessionsSerializer, SessionsService, SessionsGuard],
  controllers: [AuthController],
  exports: [SessionsService],
})
export class AuthModule {}
