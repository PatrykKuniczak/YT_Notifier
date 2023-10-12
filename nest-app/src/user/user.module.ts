import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './model/users.entity';

@Module({
	imports: [TypeOrmModule.forFeature([UsersEntity])],
	providers: [UsersService],
	exports: [UsersService]
})
export class UserModule {}
