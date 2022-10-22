import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { AddressRepository } from '../repository/address.repository';

@Injectable()
export class FindAddressesByUserIdService {
  constructor(
    private addressRepository: AddressRepository,
    private userRepository: UserRepository,
  ) {}

  async execute(id: number) {
    const userExists = await this.userRepository.findOneById(id);

    if (!userExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Usuario não encontrado',
      };
    }

    const usersAddresses = await this.addressRepository.findAddressesByUserId(
      id,
    );

    return {
      codigo: 200,
      status: 'Sucesso',
      mensagem: 'Endereços encontrado com sucesso',
      data: usersAddresses,
    };
  }
}
