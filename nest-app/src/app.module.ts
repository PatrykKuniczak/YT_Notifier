import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OAuth2Module } from './auth/oauth2.module';
import typeOrmConfig from './database/config/typeorm.config';
import { KeyWordsModule } from './key-words/key-words.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `${process.cwd()}${process.env.NODE_ENV === 'production' ? '\\envs\\prod.env' : '\\envs\\local.env'}`,
      ],
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    UserModule,
    AuthModule,
    OAuth2Module,
    KeyWordsModule,
  ],
})
export class AppModule {}
