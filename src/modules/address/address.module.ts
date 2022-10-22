import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address.repository';
import { CreateAddressService } from './services/create-address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressRepository, CreateAddressService],
})
export class AddressModule {}
