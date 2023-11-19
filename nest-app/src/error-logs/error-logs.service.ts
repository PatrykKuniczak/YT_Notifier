import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateErrorLogDto } from './dto/create-key-word.dto';
import { ErrorLogsEntity } from './model/error-logs.entity';

@Injectable()
export class ErrorLogsService {
  constructor(
    @InjectRepository(ErrorLogsEntity)
    private readonly errorLogsRepository: Repository<ErrorLogsEntity>,
  ) {}

  async findAll(userId: number) {
    return this.errorLogsRepository.findBy({ user: { id: userId } });
  }

  async create({ errorValues, userId }: CreateErrorLogDto) {
    const errorLogEntity = this.errorLogsRepository.create({ errorValues, user: { id: userId } });

    return this.errorLogsRepository.save(errorLogEntity).catch(err => {
      throw new InternalServerErrorException(`Error on saving error message: ${err.message}`);
    });
  }
}
