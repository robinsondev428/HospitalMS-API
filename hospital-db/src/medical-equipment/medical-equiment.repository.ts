import { Repository, EntityRepository } from "typeorm";
import { MedicalEquipment } from "./medical-equiment.entity";

@EntityRepository(MedicalEquipment)
export class MedicalEquipmentRepository extends Repository<MedicalEquipment>{

}