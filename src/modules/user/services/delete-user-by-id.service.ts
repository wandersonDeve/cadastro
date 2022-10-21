import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class DeleteUserById {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number) {
    const userExists = await this.userRepository.findOneById(id);

    if (!userExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Usuario não encontrado',
      };
    }

    await this.userRepository.deleteUserById(id);

    return {
      codigo: 204,
      status: 'Sucesso',
      mensagem: 'Usuario deletado com sucesso',
    };
  }
}
