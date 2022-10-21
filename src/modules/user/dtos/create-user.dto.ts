import { IsCPF } from 'brazilian-class-validator';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O campo nome deve ser uma string' })
  @Length(3, 120, { message: 'O campo nome deve ter entre 3 e 120 caracteres' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  name: string;

  @IsString({ message: 'O campo sobrenome deve ser uma string' })
  @IsNotEmpty({ message: 'O campo sobrenome não pode ser vazio' })
  last_name: string;

  @IsString({ message: 'O campo email deve ser uma string' })
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsEmail({ message: 'O email deve ser valido' })
  email: string;

  @IsPhoneNumber('BR', { message: 'O phone deve conter 11 caracteres' })
  @Length(11, 11, { message: 'O phone deve conter 11 caracteres' })
  @IsNumberString({ message: 'O campo phone deve ser numeros validos' })
  @IsNotEmpty({ message: 'O campo phone não pode ser vazio' })
  phone: string;

  @IsString({ message: 'O campo cpf deve ser uma string' })
  @IsNotEmpty({ message: 'O campo cpf não pode ser vazio' })
  @IsCPF({ message: 'O cpf deve ser valido' })
  cpf: string;
}
