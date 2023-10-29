import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';
import { KeyWordEntity } from './model/key-word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyWordEntity]), UsersModule],
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
  exports: [KeyWordsService],
})
export class KeyWordsModule {}
