import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repository/address.repository';

@Injectable()
export class FindAddressById {
  constructor(private addressRepository: AddressRepository) {}

  async execute(id: number) {
    const addressExists = await this.addressRepository.findAddressById(id);

    if (!addressExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Endereço não encontrado',
      };
    }

    return {
      codigo: 200,
      status: 'Sucesso',
      mensagem: 'Ação Realizada com sucesso',
      data: addressExists,
    };
  }
}
