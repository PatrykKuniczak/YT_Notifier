import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OAuth2Module } from './auth/oauth2.module';
import { typeOrmFactory } from './database/config/typeorm.config';
import { KeyWordsModule } from './key-words/key-words.module';
import { UserYtVideosModule } from './user-yt-videos/user-yt-videos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${process.cwd()}${
          process.env.NODE_ENV === 'production'
            ? '\\envs\\prod.env'
            : process.env.NODE_ENV === 'development'
            ? '\\envs\\local.env'
            : '\\envs\\dev-remote.env'
        }`,
      ],
    }),
    TypeOrmModule.forRootAsync(typeOrmFactory),
    UsersModule,
    AuthModule,
    OAuth2Module,
    KeyWordsModule,
    UserYtVideosModule,
  ],
})
export class AppModule {}
