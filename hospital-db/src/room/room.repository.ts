import { Repository, EntityRepository } from "typeorm";
import { Room } from "./room.entity";
import { IRoomDTO } from "./dto/roomDTO";
@EntityRepository(Room)
export class RoomRepository extends Repository<Room>{
    /**
     * Create a new Room
     * @param roomData data of the room
     */
    async createRoom(roomData: IRoomDTO){
        const { BedsQty, Floor, ID, Name, Type} = roomData;
        const room = new Room();
        room.id = ID;
        room.name = Name;
        room.bedsQty = BedsQty;
        room.floor = Floor;
        room.type = Type;
        console.log('newRoom', room);
        return await room.save();
    }
}