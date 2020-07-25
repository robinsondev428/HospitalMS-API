import { Module } from '@nestjs/common';
import { MedicalEquipmentController } from './medical-equipment.controller';
import { MedicalEquipmentService } from './medical-equipment.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  controllers: [MedicalEquipmentController],
  providers: [MedicalEquipmentService]
})
export class MedicalEquipmentModule {}
