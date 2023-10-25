import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './model/users.entity';
import { IProfile } from './user.types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async findOrCreate(refreshToken: string | undefined, profile: IProfile): Promise<UsersEntity | null> {
    const email = profile.emails[0].value;
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      const result = await this.userRepository.insert({
        displayName: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        refreshToken,
      });

      return this.findOneById(result.identifiers[0].id);
    } else if (user && refreshToken) {
      const result = await this.updateRefreshToken(user.id, refreshToken);

      if (!result) {
        throw new InternalServerErrorException('Error on updating user');
      }

      return this.userRepository.findOneBy({ email });
    }

    return user;
  }

  async findOneById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async getRefreshTokenById(id: number) {
    return this.userRepository.findOne({
      where: { id },
      select: { refreshToken: true },
    });
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    const { affected } = await this.userRepository.update({ id }, { refreshToken });

    return !!affected;
  }

  async updateLastFetchDate(userId: number) {
    const { affected } = await this.userRepository.update({ id: userId }, { lastFetch: new Date() }).catch(err => {
      throw new InternalServerErrorException('Error on updating fetch date of user: ' + err.message);
    });

    return !!affected;
  }

  async delete(id: number) {
    return this.userRepository.delete({ id });
  }
}
