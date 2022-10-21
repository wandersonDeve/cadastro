import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../entity/user.entity';

export class UserRepository extends PrismaClient {
  async createUser(data): Promise<UserEntity> {
    return this.user.create(data);
  }
}
