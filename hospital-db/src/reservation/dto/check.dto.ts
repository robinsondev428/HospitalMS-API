import { MedicalProcedure } from '../../medical-procedure/medical-procedure.entity';

export class CheckDTO {
  dni: string;
  arrival_date: string;
  procedures: MedicalProcedure[];
}