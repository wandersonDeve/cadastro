import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto } from './dtos/create-user.dto';
import { ParamUserId } from './dtos/param-user-id.dto';
import { UpdateUserDto } from './dtos/update-user.sto';
import { CreateUserService } from './services/create-user.service';
import { DeleteUserById } from './services/delete-user-by-id.service';
import { FindAllUsersService } from './services/find-all-users.service';
import { FindOneUserById } from './services/find-one-user-by-id.service';
import { UpdateUserById } from './services/update-user-by-id.service';

@Controller('usuarios')
export class UserController {
  constructor(
    private createUserService: CreateUserService,
    private findOneUserById: FindOneUserById,
    private findAllUsersService: FindAllUsersService,
    private updateUserById: UpdateUserById,
    private deleteUserById: DeleteUserById,
  ) {}

  @Post()
  async createUser(@Body() data: CreateUserDto, @Res() Res: Response) {
    const response = await this.createUserService.execute(data);

    return Res.status(response.codigo).send(response);
  }

  @Get()
  async findAllUsers(@Res() Res: Response) {
    const response = await this.findAllUsersService.execute();

    return Res.status(response.codigo).send(response);
  }

  @Get(':id_usuario')
  async findUserbyId(
    @Param() { id_usuario }: ParamUserId,
    @Res() Res: Response,
  ) {
    const response = await this.findOneUserById.execute(+id_usuario);

    return Res.status(response.codigo).send(response);
  }

  @Put(':id_usuario')
  async updateUser(
    @Param() { id_usuario }: ParamUserId,
    @Body() data: UpdateUserDto,
    @Res() Res: Response,
  ) {
    const response = await this.updateUserById.execute(+id_usuario, data);

    return Res.status(response.codigo).send(response);
  }

  @Delete(':id_usuario')
  async deleteUse(@Param() { id_usuario }: ParamUserId, @Res() Res: Response) {
    const response = await this.deleteUserById.execute(+id_usuario);

    return Res.status(response.codigo).send(response);
  }
}
