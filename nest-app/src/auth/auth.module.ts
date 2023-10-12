import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './googleAuth/google.strategy';
import { SessionSerializer } from './session/session.serializer';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { SessionService } from './session/session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './session/session.entity';
import { GoogleAuthGuard } from './googleAuth/google.guard';

@Module({
	imports: [
		PassportModule,
		UserModule,
		TypeOrmModule.forFeature([SessionEntity]),
		UserModule
	],
	providers: [
		GoogleStrategy,
		SessionSerializer,
		SessionService,
		GoogleAuthGuard
	],
	controllers: [AuthController]
})
export class AuthModule {}
