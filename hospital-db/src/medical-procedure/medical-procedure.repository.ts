import { Repository, EntityRepository } from "typeorm";
import { MedicalProcedure } from "./medical-procedure.entity";

@EntityRepository(MedicalProcedure)
export class MedicalProcedureRepository extends Repository<MedicalProcedure>{

}