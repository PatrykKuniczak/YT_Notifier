import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuth2Module } from '../auth/oauth2.module';
import { UsersModule } from '../users/users.module';
import { UserYtVideosEntity } from './model/user-yt-videos.entity';
import { UserYtVideosController } from './user-yt-videos.controller';
import { UserYtVideosService } from './user-yt-videos.service';

@Module({
  imports: [OAuth2Module, forwardRef(() => UsersModule), TypeOrmModule.forFeature([UserYtVideosEntity])],
  controllers: [UserYtVideosController],
  providers: [UserYtVideosService],
  exports: [UserYtVideosService],
})
export class UserYtVideosModule {}
