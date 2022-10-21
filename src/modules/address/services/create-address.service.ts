import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { AddressRepository } from '../repository/address.repository';

@Injectable()
export class CreateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute(data: CreateAddressDto) {
    const addressCreated = await this.addressRepository.createAddress(data);

    return {
      codigo: 201,
      status: 'Sucesso',
      mensagem: 'Endereço cadastrado com sucesso',
      data: addressCreated,
    };
  }
}
