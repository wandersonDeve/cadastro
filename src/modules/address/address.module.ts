import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AddressController } from './address.controller';
import { AddressRepository } from './repository/address.repository';
import { CreateAddressService } from './services/create-address.service';
import { DeleteAddressByIdService } from './services/delete-address-by-id.service';
import { FindAddressByIdService } from './services/find-address-by-id.service';
import { FindAddressesByUserIdService } from './services/find-addresses-by-user-id.service';
import { UpdateAddressByIdService } from './services/update-address-by-id.service';

@Module({
  imports: [UserModule],
  controllers: [AddressController],
  providers: [
    AddressRepository,
    CreateAddressService,
    FindAddressByIdService,
    FindAddressesByUserIdService,
    UpdateAddressByIdService,
    DeleteAddressByIdService,
  ],
})
export class AddressModule {}
