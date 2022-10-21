import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.sto';
import { UserEntity } from '../entity/user.entity';

export class UserRepository extends PrismaClient {
  async createUser(data: CreateUserDto): Promise<UserEntity> {
    return this.user.create({ data });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return this.user.findMany();
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.user.findUnique({
      where: { email },
    });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return this.user.findUnique({
      where: { id },
    });
  }

  async updateUserById(id: number, data: UpdateUserDto): Promise<UserEntity> {
    return await this.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteUserById(id: number): Promise<void> {
    await this.user.delete({
      where: {
        id,
      },
    });
  }
}
