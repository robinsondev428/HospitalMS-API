import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { isBoolean } from 'util';
import { type } from 'os';
import { Room } from 'src/room/room.entity';

@Entity()
export class Bed extends BaseEntity {

  /**
   * Bed UUID.
   */
  @PrimaryColumn({length:36})
  BedID: string;

  /**
   * Indicates if it is an ICU bed.
   */
  @Column()
  UCI: boolean;

  /**
   * Room in which the bed is located.
   */
  @Column()
  @OneToMany(
    type => Room,
    room => room.RoomID
  )
  RoomID: number;
}