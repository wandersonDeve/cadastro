import { PrismaClient } from '@prisma/client';
import { handleError } from 'src/shared/utils/handle-error.util';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { AddressEntity } from '../entity/address.entity';

export class AddressRepository extends PrismaClient {
  async createAddress(data: CreateAddressDto): Promise<AddressEntity> {
    return this.address.create({ data }).catch(handleError);
  }
}
