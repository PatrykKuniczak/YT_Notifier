import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OAuth2Module } from './auth/oauth2.module';
import { typeOrmFactory } from './database/config/typeorm.config';
import { ErrorLogsModule } from './error-logs/error-logs.module';
import { KeyWordsModule } from './key-words/key-words.module';
import { UserYtVideosModule } from './user-yt-videos/user-yt-videos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: process.env.NODE_ENV === 'development',
      envFilePath: [
        `${process.cwd()}${process.env.NODE_ENV === 'development' ? '\\envs\\local.env' : '\\envs\\prod.env'}`,
      ],
    }),
    TypeOrmModule.forRootAsync(typeOrmFactory),
    UsersModule,
    AuthModule,
    OAuth2Module,
    KeyWordsModule,
    UserYtVideosModule,
    ErrorLogsModule,
  ],
})
export class AppModule {}
