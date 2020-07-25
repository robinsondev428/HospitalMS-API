import { Repository, EntityRepository } from "typeorm";
import { ClinicalRecord } from "./clinical-records.entity";

@EntityRepository(ClinicalRecord)
export class ClinicalRecordsRepository extends Repository<ClinicalRecord>{

}