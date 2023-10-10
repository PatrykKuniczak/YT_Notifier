import {Injectable} from '@nestjs/common';
import {PassportSerializer} from '@nestjs/passport';
import {UsersService} from '../../user/user.service';
import {IUser} from '../../user/user.types';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private readonly userService: UsersService) {
        super();
    }

    serializeUser(user: IUser, done: Function) {
        done(null, user);
    }

    async deserializeUser(payload: IUser, done: Function) {
        const user = await this.userService.findOneById(payload.id);

        return user ? done(null, user) : done(null, null);
    }
}
