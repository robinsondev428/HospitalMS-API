import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRepository } from './patient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientRepository]),
  ],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
