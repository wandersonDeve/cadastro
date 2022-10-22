import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address.repository';
import { CreateAddressService } from './services/create-address.service';
import { FindAddressByIdService } from './services/find-address-by-id.service';
import { FindAddressesByUserIdService } from './services/find-addresses-by-user-id.service';

@Module({
  imports: [UserModule],
  controllers: [AddressController],
  providers: [
    AddressRepository,
    CreateAddressService,
    FindAddressByIdService,
    FindAddressesByUserIdService,
  ],
})
export class AddressModule {}
