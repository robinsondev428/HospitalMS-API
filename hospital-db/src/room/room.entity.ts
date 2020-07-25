import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";
import { ITypeRoom } from "./dto/type-room.enum";

@Entity()
export class Room extends BaseEntity {
  /**
   * Id for the room
   */
  @PrimaryColumn()
  RoomID: number;
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
}