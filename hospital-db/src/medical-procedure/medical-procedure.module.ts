import { Module } from '@nestjs/common';
import { MedicalProcedureController } from './medical-procedure.controller';
import { MedicalProcedureService } from './medical-procedure.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalProcedureRepository } from './medical-procedure.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MedicalProcedureRepository]),
  ],
  controllers: [MedicalProcedureController],
  providers: [MedicalProcedureService]
})
export class MedicalProcedureModule {}
