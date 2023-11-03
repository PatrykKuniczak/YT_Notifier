import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionsEntity } from './sessions.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(SessionsEntity)
    private readonly sessionRepository: Repository<SessionsEntity>,
  ) {}

  async findById(id: string) {
    return this.sessionRepository.findOneBy({ id });
  }
}
