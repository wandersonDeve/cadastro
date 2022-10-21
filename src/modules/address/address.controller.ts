import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateAddressDto } from './dtos/create-address.dto';
import { CreateAddressService } from './services/create-address.service';

@Controller('address')
export class AddressController {
  constructor(private createAddressService: CreateAddressService) {}

  @Post()
  async createAddress(@Body() data: CreateAddressDto, @Res() res: Response) {
    const response = await this.createAddressService.execute(data);

    return res.status(response.codigo).send(response);
  }
}
