import { Repository, EntityRepository } from "typeorm";
import { MedicalEquipment } from "./medical-equiment.entity";
import { MedicalEquipmentDTO } from "./dto/medicalEquimentDTO";

@EntityRepository(MedicalEquipment)
export class MedicalEquipmentRepository extends Repository<MedicalEquipment>{
    /**
     * Create a new medical equipment
     * @param dataEQ data of the medical equipment
     */
    async createMedicalEquipment(dataEQ: MedicalEquipmentDTO){
        const {Name, Provider, Qty} = dataEQ;
        const equipment = new MedicalEquipment;
        
        equipment.name = Name;
        equipment.provider = Provider;
        equipment.qty = Qty;
        console.log('new EQ', equipment);
        return await equipment.save();
    }

}