import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { KeyWordEntity } from './entities/key-word.entity';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';

@Module({
  imports: [TypeOrmModule.forFeature([KeyWordEntity]), AuthModule, UserModule],
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
})
export class KeyWordsModule {}
