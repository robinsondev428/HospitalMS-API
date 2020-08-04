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
        return await this.bedRepository.find();
    }
    /**
     * Get a bed
     * @param id of the bed
     */
    async getBed(id: string){
        const found = await this.bedRepository.findOne(id);
        console.log('found bed', found);
        if(found){
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
        bed.equipment = EquipmentID;
        bed.room = RoomID;
        return await bed.save();
    }
    /**
     * Set the room id to null
     * @param id id of the room
     */
    async updateRoomID(id:string){
        const found = await this.bedRepository.findOne({where: {room: id}});
        found.room = null;
        return await found.save();
    }
}
