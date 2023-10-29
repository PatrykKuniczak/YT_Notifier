import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from '../users/users.types';
import { CreateKeyWordDto } from './dto/create-key-word.dto';
import { UpdateKeyWordDto } from './dto/update-key-word.dto';
import { KeyWordEntity } from './model/key-word.entity';

@Injectable()
export class KeyWordsService {
  constructor(
    @InjectRepository(KeyWordEntity)
    private readonly keyWordRepository: Repository<KeyWordEntity>,
  ) {}

  async findAll(userId: number) {
    return this.keyWordRepository.findBy({ user: { id: userId } });
  }

  async findOne(userId: number, id: number) {
    return this.keyWordRepository.findOneByOrFail({ user: { id: userId }, id }).catch(() => {
      throw new NotFoundException();
    });
  }

  async create({ content }: CreateKeyWordDto, { id }: IUser) {
    const keyWord = await this.keyWordRepository.findOneBy({ content, user: { id } });

    if (!keyWord) {
      const keyWordEntity = this.keyWordRepository.create({ content, user: { id } });

      return this.keyWordRepository.save(keyWordEntity).catch(err => {
        throw new InternalServerErrorException(`Error on creating user: ${err.message}`);
      });
    }

    throw new ConflictException('This keyword already exists');
  }

  async update(id: number, { content }: UpdateKeyWordDto) {
    const keyWord = await this.keyWordRepository.findOneBy({ content });

    if (keyWord && keyWord.id !== id) {
      throw new ConflictException('This keyword already exists');
    }

    this.keyWordRepository.update(id, { content }).catch(err => {
      throw new InternalServerErrorException(`Error on updating user: ${err.message}`);
    });
  }

  async delete(id: number) {
    await this.keyWordRepository.delete(id);
  }
}
