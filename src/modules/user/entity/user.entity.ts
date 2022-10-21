import { Prisma } from '@prisma/client';

export class UserEntity implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  cpf: string;
}
