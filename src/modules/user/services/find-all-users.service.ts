import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { UserResponseType } from '../types/user-response.type';

@Injectable()
export class FindAllUsersService {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<UserResponseType> {
    const users = await this.userRepository.findAllUsers();

    return {
      codigo: 200,
      status: 'Sucesso',
      mensagem: 'Ação Realizada com sucesso',
      data: users,
    };
  }
}
