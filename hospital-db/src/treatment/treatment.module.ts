import { Module } from '@nestjs/common';
import { TreatmentController } from './treatment.controller';
import { TreatmentService } from './treatment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentRepository } from './treatment.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TreatmentRepository]),
  ],
  controllers: [TreatmentController],
  providers: [TreatmentService]
})
export class TreatmentModule {}
