import { Repository, EntityRepository } from "typeorm";
import { Treatment } from "./treatment.entity";
import { TreatmentDTO } from "./dto/treatment.dto";

@EntityRepository(Treatment)
export class TreatmentRepository extends Repository<Treatment>{
    /**
     * Create a new treatment
     * @param data of the new treatment
     */
    async createTreatment(data: TreatmentDTO){
        const { Description, Name, RecordId} = data;
        const treatment = new Treatment;
        treatment.clinicalRecord = RecordId;
        treatment.description = Description;
        treatment.name = Name;
        return await treatment.save();
    }
}