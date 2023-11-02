import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserYtVideosEntity } from '../user-yt-videos/model/user-yt-videos.entity';
import { UsersEntity } from './model/users.entity';
import { IProfile } from './users.types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  async findOrCreate(refreshToken: string | undefined, profile: IProfile): Promise<UsersEntity | null> {
    const email = profile.emails[0].value;
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      return this.dataSource.transaction(async transactionalEntityManager => {
        const userEntity = this.userRepository.create({
          displayName: profile.displayName,
          email,
          avatar: profile.photos[0].value,
          refreshToken,
        });

        const userYtVideos = transactionalEntityManager.create(UserYtVideosEntity, { user: userEntity });

        return (await transactionalEntityManager.save(userYtVideos)).user;
      });
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

  async delete(id: number) {
    return this.userRepository.delete({ id });
  }
}
