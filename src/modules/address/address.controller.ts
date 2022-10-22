import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ParamUserId } from '../user/dtos/param-user-id.dto';
import { CreateAddressDto } from './dtos/create-address.dto';
import { ParamAddressId } from './dtos/param-address-id.dto';
import { CreateAddressService } from './services/create-address.service';
import { FindAddressByIdService } from './services/find-address-by-id.service';
import { FindAddressesByUserIdService } from './services/find-addresses-by-user-id.service';

@Controller('enderecos-usuario')
export class AddressController {
  constructor(
    private createAddressService: CreateAddressService,
    private findAddressByIdService: FindAddressByIdService,
    private findAddressesByUserIdService: FindAddressesByUserIdService,
  ) {}

  @Post()
  async createAddress(@Body() data: CreateAddressDto, @Res() res: Response) {
    const response = await this.createAddressService.execute(data);

    return res.status(response.codigo).send(response);
  }

  @Get(':id_endereco_usuario')
  async findAddress(
    @Param() { id_endereco_usuario }: ParamAddressId,
    @Res() res: Response,
  ) {
    const response = await this.findAddressByIdService.execute(
      +id_endereco_usuario,
    );

    return res.status(response.codigo).send(response);
  }

  @Get('id_usuario/:id_usuario')
  async findAddresses(
    @Param() { id_usuario }: ParamUserId,
    @Res() res: Response,
  ) {
    const response = await this.findAddressesByUserIdService.execute(
      +id_usuario,
    );

    return res.status(response.codigo).send(response);
  }
}
