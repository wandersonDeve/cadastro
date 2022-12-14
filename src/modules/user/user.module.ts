import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { CreateUserService } from './services/create-user.service';
import { DeleteUserById } from './services/delete-user-by-id.service';
import { FindAllUsersService } from './services/find-all-users.service';
import { FindOneUserById } from './services/find-one-user-by-id.service';
import { UpdateUserById } from './services/update-user-by-id.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    CreateUserService,
    FindOneUserById,
    FindAllUsersService,
    UpdateUserById,
    DeleteUserById,
  ],
  exports: [UserRepository],
})
export class UserModule {}
