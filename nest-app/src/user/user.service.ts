import {Injectable} from '@nestjs/common';
import {InjectDataSource, InjectRepository} from '@nestjs/typeorm';
import {DataSource, Repository} from 'typeorm';
import {UsersEntity} from './model/users.entity';
import {IProfile} from './user.types';

@Injectable()
export class UsersService {
    constructor(
        @InjectDataSource() private readonly dataSource: DataSource,
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) {
    }

    async validateUser(
        refreshToken: string,
        profile: IProfile,
    ): Promise<UsersEntity | null> {
        const result = await this.dataSource
            .createQueryBuilder()
            .insert()
            .into(UsersEntity)
            .values({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                refreshToken,
            })
            .orUpdate(
                ['displayName', 'email', 'avatar', 'refreshToken'],
                ['email'],
                {
                    skipUpdateIfNoValuesChanged: true,
                }
            )
            .execute();

        return this.findOne(result.identifiers[0].id)
    }

    async findOne(id: number) {
        return this.userRepository.findOneBy({id});
    }
}
