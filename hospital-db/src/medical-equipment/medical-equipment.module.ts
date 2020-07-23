import { Module } from '@nestjs/common';
import { MedicalEquipmentController } from './medical-equipment.controller';
import { MedicalEquipmentService } from './medical-equipment.service';

@Module({
  controllers: [MedicalEquipmentController],
  providers: [MedicalEquipmentService]
})
export class MedicalEquipmentModule {}
