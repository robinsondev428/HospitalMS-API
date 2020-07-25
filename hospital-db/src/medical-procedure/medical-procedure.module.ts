import { Module } from '@nestjs/common';
import { MedicalProcedureController } from './medical-procedure.controller';
import { MedicalProcedureService } from './medical-procedure.service';

@Module({
  controllers: [MedicalProcedureController],
  providers: [MedicalProcedureService]
})
export class MedicalProcedureModule {}
