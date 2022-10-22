import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateAddressDto } from './dtos/create-address.dto';
import { ParamAddressId } from './dtos/param-address-id.dto';
import { CreateAddressService } from './services/create-address.service';
import { FindAddressById } from './services/find-address-by-id.service';

@Controller('enderecos-usuario')
export class AddressController {
  constructor(
    private createAddressService: CreateAddressService,
    private findAddressById: FindAddressById,
  ) {}

  @Post()
  async createAddress(@Body() data: CreateAddressDto, @Res() res: Response) {
    const response = await this.createAddressService.execute(data);

    return res.status(response.codigo).send(response);
  }

  @Get()
  async findAddress(@Param() { id }: ParamAddressId, @Res() res: Response) {
    const response = await this.findAddressById.execute(+id);

    return res.status(response.codigo).send(response);
  }
}
