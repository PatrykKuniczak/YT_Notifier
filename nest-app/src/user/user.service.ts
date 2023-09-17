import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UsersEntity} from './model/users.entity';
import {IProfile} from './user.types';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity) private readonly userRepository: Repository<UsersEntity>
    ) {
    }

    // TODO: ZWRACAJ STATYCZNY HTML KTORY WYSWIETLISZ DO USERA Z INFO, ZE ZOSTAL ZAUTENTYKOWANY
    // TODO: DEAUTORYZUJ APKE GDY USER USUNIE KONTO, ABY NIE BYLO SYTUACJI ZE UTWORZY KONTO NA NOWO A APKE BEDZIE MIAL DALEJ ZAUTORYZOWANA I NIE DOSTANIE REFRESH TOKENU
    async validateUser(
        refreshToken: string | undefined,
        profile: IProfile,
    ): Promise<UsersEntity | null> {
        const user = await this.userRepository.findOneBy({email: profile.emails[0].value})

        if (!user) {
            const result = await this.userRepository.insert({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                refreshToken,
            })

            return this.findOneById(result.identifiers[0].id)
        } else if (user && refreshToken) {
            const result = await this.userRepository.update({id: user.id}, {refreshToken})

            if (result.affected === 1) {
                return this.userRepository.findOneBy({email: profile.emails[0].value})
            }
            throw new InternalServerErrorException('Exception on trying update profile')
        }

        return user
    }

    async findOneById(id: number) {
        return this.userRepository.findOneBy({id});
    }
}
