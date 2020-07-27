import { Repository, EntityRepository } from "typeorm";
import { Pathology } from "./pathology.entity";
import { PathologyDTO } from "./dto/pathologyDTO";

@EntityRepository(Pathology)
export class PathologyRepository extends Repository<Pathology>{
    /**
     * Create a new pathology
     * @param data of the pathology
     */
    async createPathology(data: PathologyDTO){
        const { Description, Name, PatientDni} = data;
        const pathology = new Pathology();
        pathology.Description = Description;
        pathology.Name = Name;
        pathology.Patient = PatientDni;
        return await pathology.save();
    }
}