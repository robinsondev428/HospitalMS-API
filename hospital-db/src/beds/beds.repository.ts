import { Repository, EntityRepository } from "typeorm";
import { Bed } from "./beds.entity";
import { BedDTO } from "./dto/beds.dto";

@EntityRepository(Bed)
export class BedsRepository extends Repository<Bed>{
    /**
     * Create a bed
     */
    async createBed(BedData: BedDTO){
        const {ID, UCI, RoomID, EquipmentID} = BedData;
        const bed = new Bed();
        bed.Id = ID;
        bed.UCI = UCI;
        bed.room = RoomID;
        bed.equipment = EquipmentID;
        console.log('new Bed', bed);
        return await bed.save();
    }
}