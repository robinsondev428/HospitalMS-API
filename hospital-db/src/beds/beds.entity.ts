import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { type } from 'os';
import { Room } from 'src/room/room.entity';
import { MedicalEquipment } from '../medical-equipment/medical-equiment.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Bed extends BaseEntity {

  /**
   * Bed UUID.
   */
  @PrimaryColumn({length:36})
  id: string;

  /**
   * Indicates if it is an ICU bed.
   */
  @Column()
  uci: boolean;

  /**
   * Room in which the bed is located.
   */
  @ManyToOne(
    type => Room,
    room => room.beds
  )
  room: Room;

  @ManyToMany(type=> MedicalEquipment)
  @JoinTable()
  equipment: MedicalEquipment[];

  @OneToMany(
    type=> Reservation,
    reservation => reservation.bed)
  reservation: Reservation[];
}