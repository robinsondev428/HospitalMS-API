import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ITypeRoom } from "./dto/type-room.enum";
import { Bed } from '../beds/beds.entity';

@Entity()
export class Room extends BaseEntity {
  /**
   * Id for the room
   */
  @PrimaryColumn()
  id: number;
  /**
   * Quantity of beds in the room
   */
  @Column()
  beds_qty: number;
  /**
   * Number of the floor in the room
   */
  @Column()
  floor: number;
  /**
   * Name of the room
   */
  @Column({ length: 30 })
  name: string;
  /**
   * Type of the room
   */
  @Column()
  type: ITypeRoom;

  @OneToMany(
    type=> Bed, 
    bed => bed.room_)
  beds: Bed[];
}