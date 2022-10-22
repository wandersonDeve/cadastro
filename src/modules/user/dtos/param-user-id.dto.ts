import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ParamUserId {
  @IsNumberString()
  @IsNotEmpty({ message: 'O campo id não pode ser vazio' })
  id_usuario: string;
}
