/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, Column, OneToMany, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { Room } from 'src/room/room.entity';
import { MedicalEquipment } from '../medical-equipment/medical-equiment.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Bed extends BaseEntity {

  /**
   * Bed UUID.
   */
  @PrimaryGeneratedColumn("uuid")
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
    room => room.beds)
  room_: Room;

  @ManyToMany(type=> MedicalEquipment)
  @JoinTable()
  equipment: MedicalEquipment[];

  @OneToMany(
    type=> Reservation,
    reservation => reservation.bed_)
  reservation: Reservation[];
}