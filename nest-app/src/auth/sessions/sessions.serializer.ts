import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersEntity } from '../../users/model/users.entity';
import { UsersService } from '../../users/users.service';

@Injectable()
export class SessionsSerializer extends PassportSerializer {
  constructor(private readonly userService: UsersService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: UsersEntity, done: Function) {
    done(null, user);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async deserializeUser(payload: UsersEntity, done: Function) {
    const user = await this.userService.findOneById(payload.id);

    return user ? done(null, user) : done(null, null);
  }
}
