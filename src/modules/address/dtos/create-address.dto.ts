import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString({ message: 'O campo zip_code deve ser uma string' })
  @IsNotEmpty({ message: 'O campo zip_code não pode ser vazio' })
  zip_code: string;

  @IsString({ message: 'O campo city deve ser uma string' })
  @IsNotEmpty({ message: 'O campo city não pode ser vazio' })
  city: string;

  @IsString({ message: 'O campo state deve ser uma string' })
  @IsNotEmpty({ message: 'O campo state não pode ser vazio' })
  state: string;

  @IsString({ message: 'O campo street deve ser uma string' })
  @IsNotEmpty({ message: 'O campo street não pode ser vazio' })
  street: string;

  @IsString({ message: 'O campo neighborhood deve ser uma string' })
  @IsNotEmpty({ message: 'O campo neighborhood não pode ser vazio' })
  neighborhood: string;

  @IsString({ message: 'O campo number deve ser uma string' })
  @IsNotEmpty({ message: 'O campo number não pode ser vazio' })
  number: string;

  @IsString({ message: 'O campo complement deve ser uma string' })
  @IsNotEmpty({ message: 'O campo complement não pode ser vazio' })
  complement: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo userId não pode ser vazio' })
  userId: number;
}
