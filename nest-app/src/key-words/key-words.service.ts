import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorLogsService } from '../error-logs/error-logs.service';
import { UsersEntity } from '../users/model/users.entity';
import { CreateKeyWordDto } from './dto/create-key-word.dto';
import { UpdateKeyWordDto } from './dto/update-key-word.dto';
import { KeyWordsEntity } from './model/key-words.entity';

@Injectable()
export class KeyWordsService {
  constructor(
    @InjectRepository(KeyWordsEntity)
    private readonly keyWordRepository: Repository<KeyWordsEntity>,
    private readonly errorLogsService: ErrorLogsService,
  ) {}

  async findAll(userId: number) {
    return this.keyWordRepository.findBy({ user: { id: userId } });
  }

  async findOne(userId: number, id: number) {
    return this.keyWordRepository.findOneByOrFail({ user: { id: userId }, id }).catch(() => {
      throw new NotFoundException({ reason: 'Keyword not found', cause: 'keyword_not_found' });
    });
  }

  async create({ content }: CreateKeyWordDto, { id }: UsersEntity) {
    const keyWord = await this.keyWordRepository.findOneBy({ content, user: { id } });

    if (!keyWord) {
      const keyWordEntity = this.keyWordRepository.create({ content, user: { id } });

      return this.keyWordRepository.save(keyWordEntity).catch(async err => {
        await this.errorLogsService.create({
          message: err.driverError,
          userId: id,
        });
        throw new InternalServerErrorException(`Error on creating user: ${err.message}`);
      });
    }

    throw new ConflictException({ reason: 'This keyword already exists', cause: 'duplicated_keyword' });
  }

  async update(id: number, { content }: UpdateKeyWordDto) {
    const keyWord = await this.keyWordRepository.findOneBy({ content });

    if (keyWord && keyWord.id !== id) {
      throw new ConflictException({ reason: 'This keyword already exists', cause: 'duplicated_keyword' });
    }

    this.keyWordRepository.update(id, { content }).catch(async err => {
      await this.errorLogsService.create({
        message: err.driverError,
        userId: id,
      });
      throw new InternalServerErrorException(`Error on updating user: ${err.message}`);
    });
  }

  async delete(id: number) {
    await this.keyWordRepository.delete(id);
  }
}
