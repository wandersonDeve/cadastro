import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address.repository';
import { CreateAddressService } from './services/create-address.service';
import { FindAddressById } from './services/find-address-by-id.service';

@Module({
  controllers: [AddressController],
  providers: [AddressRepository, CreateAddressService, FindAddressById],
})
export class AddressModule {}
