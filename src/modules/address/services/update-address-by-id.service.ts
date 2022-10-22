import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { UpdateAddressDto } from '../dtos/update-address.sto';
import { AddressRepository } from '../repository/address.repository';

@Injectable()
export class UpdateAddressByIdService {
  constructor(
    private addressRepository: AddressRepository,
    private userRepository: UserRepository,
  ) {}

  async execute(id: number, data: UpdateAddressDto) {
    const addressExists = await this.addressRepository.findAddressById(id);

    if (!addressExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'endereço não encontrado',
      };
    }

    if (data.userId) {
      const userExists = await this.userRepository.findOneById(data.userId);

      if (!userExists) {
        return {
          codigo: 400,
          status: 'Falha',
          mensagem: 'Usuario não encontrado',
        };
      }
    }

    const addresssUpdated = await this.addressRepository.updateAddressById(
      id,
      data,
    );

    return {
      codigo: 200,
      status: 'Sucesso',
      mensagem: 'Endereço atualizado com sucesso',
      data: addresssUpdated,
    };
  }
}
