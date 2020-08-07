import { Injectable, NotFoundException } from '@nestjs/common';
import { BedsRepository } from './beds.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { BedDTO } from './dto/beds.dto';

@Injectable()
export class BedsService {
    constructor(
        @InjectRepository(BedsRepository)
        private bedRepository: BedsRepository
    ){}
    /**
     * Create a new bed
     * @param dataBed data of the bed
     */
    createBed(dataBed: BedDTO){
        return this.bedRepository.createBed(dataBed);
    }
    /**
     * Get the beds
     */
    async getBeds(){
        const beds=  await this.bedRepository.query(`select * from bed`);
        // console.log('beds', beds);
        return beds;
    }
    /**
     * Get the beds
     */
    async getEquipmentByBeds(id:string){
        console.log('id', id);
        const equipment=  await this.bedRepository.query(`select * from bed_equipment_medical_equipment where "bed_id"='${id['id']}';`);
        const tableEquipment = await this.bedRepository.query(`
        SELECT
            b.id,
            m.name
        FROM
            bed b
        INNER JOIN bed_equipment_medical_equipment p 
            ON p.bed_id = b.id
        INNER JOIN medical_equipment m 
            ON p.medical_equipment_id = m.id
        where b.id='${id['id']}'`)
        console.log('equipment', tableEquipment);
        return tableEquipment;
    }
    /**
     * Get a bed
     * @param id of the bed
     */
    async getBed(id: string){
        const found = await this.bedRepository.findOne(id);
        console.log('found bed', found);
        if(!found){
            throw new NotFoundException();
        }
        return found;
    }
    /**
     * Update the bed
     * @param idBed id of the bed
     * @param dataBed data of the bed
     */
    async updateBed(idBed: string, dataBed: BedDTO){
        const bed = await this.getBed(idBed);
        const { UCI, RoomID, EquipmentID} = dataBed;
        bed.uci = UCI;
        bed.equipment_ = EquipmentID;
        bed.room_ = RoomID;
        return await bed.save();
    }
    /**
     * Set the room id to null
     * @param id id of the room
     */
    async updateRoomID(id:string){
        const found = await this.bedRepository.findOne({where: {room_: id}});
        found.room_ = null;
        return await found.save();
    }
}
