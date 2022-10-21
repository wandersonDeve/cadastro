import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../entity/user.entity';

export class UserRepository extends PrismaClient {
  async createUser(data): Promise<UserEntity> {
    return this.user.create(data);
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    return this.user.findUnique({
      where: { email },
    });
  }
}
