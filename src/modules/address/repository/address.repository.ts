import { PrismaClient } from '@prisma/client';
import { handleError } from 'src/shared/utils/handle-error.util';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { UpdateAddressDto } from '../dtos/update-address.sto';
import { AddressEntity } from '../entity/address.entity';

export class AddressRepository extends PrismaClient {
  async createAddress(data: CreateAddressDto): Promise<AddressEntity> {
    return this.address.create({ data }).catch(handleError);
  }

  async findAddressById(id: number): Promise<AddressEntity> {
    return this.address.findUnique({ where: { id } }).catch(handleError);
  }

  async findAddressesByUserId(id: number): Promise<AddressEntity[]> {
    return this.address
      .findMany({
        where: {
          userId: id,
        },
      })
      .catch(handleError);
  }

  async updateAddressById(
    id: number,
    data: UpdateAddressDto,
  ): Promise<AddressEntity> {
    return await this.address
      .update({
        where: {
          id,
        },
        data,
      })
      .catch(handleError);
  }
}
