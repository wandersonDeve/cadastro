import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ParamUserId {
  @IsNumberString()
  @IsNotEmpty()
  id: string;
}
