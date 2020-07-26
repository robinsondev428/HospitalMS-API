import { Module } from '@nestjs/common';
import { EquimentBedController } from './equiment-bed.controller';
import { EquimentBedService } from './equiment-bed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentBedRepository } from './equimentBedRepositoy';

@Module({
  imports:[
    TypeOrmModule.forFeature([EquipmentBedRepository])
  ],
  controllers: [EquimentBedController],
  providers: [EquimentBedService]
})
export class EquimentBedModule {}
