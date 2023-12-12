import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserYtVideosEntity } from './model/user-yt-videos.entity';
import { UserYtVideosController } from './user-yt-videos.controller';
import { UserYtVideosService } from './user-yt-videos.service';

@Module({
  imports: [CacheModule.register(), TypeOrmModule.forFeature([UserYtVideosEntity])],
  controllers: [UserYtVideosController],
  providers: [UserYtVideosService],
  exports: [UserYtVideosService],
})
export class UserYtVideosModule {}
