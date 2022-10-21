import { Prisma } from '@prisma/client';

export class AddressEntity implements Prisma.AddressUncheckedCreateInput {
  id?: number;
  zip_code: string;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  userId: number;
}
