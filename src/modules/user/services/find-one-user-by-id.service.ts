import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserResponseType } from '../types/user-response.type';

@Injectable()
export class FindOneUserById {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<UserResponseType> {
    const userExists = await this.userRepository.findOneById(id);

    if (!userExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Usuario não encontrado',
      };
    }

    return {
      codigo: 200,
      status: 'Sucesso',
      mensagem: 'Ação Realizada com sucesso',
      data: userExists,
    };
  }
}
