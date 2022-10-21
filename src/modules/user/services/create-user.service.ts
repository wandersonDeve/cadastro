import { UserRepository } from './../repository/user.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserResponseType } from '../types/user-response.type';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDto): Promise<UserResponseType> {
    const { email, cpf } = data;

    const emailAlreadyExists = await this.userRepository.findUserByEmail(email);

    if (emailAlreadyExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Email já cadastrado',
      };
    }

    const cpfAlreadyExists = await this.userRepository.findUserByCpf(cpf);

    if (cpfAlreadyExists) {
      return {
        codigo: 400,
        status: 'Falha',
        mensagem: 'Cpf já cadastrado',
      };
    }

    const userCreated = await this.userRepository.createUser(data);

    return {
      codigo: 201,
      status: 'Sucesso',
      mensagem: 'Usuario cadastrado com sucesso',
      data: userCreated,
    };
  }
}
