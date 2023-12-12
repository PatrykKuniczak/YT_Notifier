import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from '../../users/users.service';
import { IUser } from '../../users/users.types';

@Injectable()
export class SessionsSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: IUser, done: Function) {
    done(null, user);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async deserializeUser(payload: IUser, done: Function) {
    const user = await this.userService.findOneById(payload.id);

    return user ? done(null, user) : done(null, null);
  }
}
