import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';
import { KeyWordEntity } from './model/key-word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyWordEntity])],
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
  exports: [KeyWordsService],
})
export class KeyWordsModule {}
