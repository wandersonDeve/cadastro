import { PrismaClient } from '@prisma/client';
import { handleError } from 'src/shared/utils/handle-error.util';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.sto';
import { UserEntity } from '../entity/user.entity';

export class UserRepository extends PrismaClient {
  async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.user.create({ data }).catch(handleError);
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return this.user.findMany().catch(handleError);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.user
      .findUnique({
        where: { email },
      })
      .catch(handleError);
  }

  async findOneById(id: number): Promise<UserEntity> {
    return this.user
      .findUnique({
        where: { id },
      })
      .catch(handleError);
  }

  async updateUserById(id: number, data: UpdateUserDto): Promise<UserEntity> {
    return await this.user
      .update({
        where: {
          id,
        },
        data,
      })
      .catch(handleError);
  }

  async deleteUserById(id: number): Promise<void> {
    await this.user
      .delete({
        where: {
          id,
        },
      })
      .catch(handleError);
  }
}
