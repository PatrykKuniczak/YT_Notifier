import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';
import { KeyWordEntity } from './model/key-word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyWordEntity]), AuthModule, UserModule],
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
  exports: [KeyWordsService],
})
export class KeyWordsModule {}
