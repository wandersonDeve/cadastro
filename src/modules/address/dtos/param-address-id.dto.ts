import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ParamAddressId {
  @IsNumberString()
  @IsNotEmpty({ message: 'O campo id não pode ser vazio' })
  id: string;
}
