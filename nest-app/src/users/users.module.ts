import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserYtVideosModule } from '../user-yt-videos/user-yt-videos.module';
import { UsersEntity } from './model/users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [forwardRef(() => UserYtVideosModule), TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
