import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ITypeRoom } from "./dto/type-room.enum";
import { Bed } from '../beds/beds.entity';

@Entity()
export class Room extends BaseEntity {
  /**
   * Id for the room
   */
  @PrimaryColumn()
  Id: number;
  /**
   * Quantity of beds in the room
   */
  @Column()
  BedsQty: number;
  /**
   * Number of the floor in the room
   */
  @Column()
  Floor: number;
  /**
   * Name of the room
   */
  @Column({ length: 30 })
  Name: string;
  /**
   * Type of the room
   */
  @Column()
  Type: ITypeRoom;

  @OneToMany(
    type=> Bed, 
    bed => bed.room)
  Beds: Bed[];
}