import { Injectable, NotFoundException } from '@nestjs/common';
import { RoomRepository } from './room.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IRoomDTO } from './dto/roomDTO';


@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(RoomRepository)
        private roomRepository: RoomRepository    ){}
    /**
     * Get all the rooms
     */
    async getAllRooms(){
        return await this.roomRepository.find();
    }
    /**
     * get the room by id
     * @param Id id of the room
     */
    async getRoomById(Id: string){
        const found = await this.roomRepository.findOne(Id);
        if(!found){
            throw new NotFoundException(`El salon con el id ${Id} no existe`);
        }
        return found;
    }
    /**
     * Create a new Room
     * @param data data of the room
     */
    async createRoom(data: IRoomDTO){
        return await this.roomRepository.createRoom(data);
    }
    /**
     * Update the data in the room
     * @param data data of the room
     * @param Id id of the room
     */
    async updateRoom(data: IRoomDTO, Id: string){
        const room = await this.getRoomById(Id);
        const {BedsQty, Floor, Name, Type} = data;
        room.beds_qty = BedsQty;
        room.floor = Floor;
        room.name = Name;
        room.type = Type;
        return await room.save();
    }
    /**
     * Delete a room
     * @param id id of the room
     */
    async deleteRoom(id: string){
        const foundRoom = await this.getRoomById(id);
        //TODO delete beds reference
        return this.roomRepository.delete(id);
    }
}
