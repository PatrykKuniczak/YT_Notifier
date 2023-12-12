import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyWordsController } from './key-words.controller';
import { KeyWordsService } from './key-words.service';
import { KeyWordsEntity } from './model/key-words.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KeyWordsEntity])],
  controllers: [KeyWordsController],
  providers: [KeyWordsService],
  exports: [KeyWordsService],
})
export class KeyWordsModule {}
