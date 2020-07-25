import { Module } from '@nestjs/common';
import { MedicalEquipmentController } from './medical-equipment.controller';
import { MedicalEquipmentService } from './medical-equipment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalEquipmentRepository } from './medical-equiment.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicalEquipmentRepository]),
  ],
  controllers: [MedicalEquipmentController],
  providers: [MedicalEquipmentService]
})
export class MedicalEquipmentModule {}
