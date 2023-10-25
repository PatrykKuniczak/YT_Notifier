import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { OAuth2Module } from '../auth/oauth2.module';
import { KeyWordsModule } from '../key-words/key-words.module';
import { UserModule } from '../user/user.module';
import { YtController } from './yt.controller';
import { YtService } from './yt.service';

@Module({
  imports: [OAuth2Module, UserModule, KeyWordsModule, AuthModule],
  controllers: [YtController],
  providers: [YtService],
})
export class YtModule {}
