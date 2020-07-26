import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Bed } from 'src/beds/beds.entity';
import { Patient } from 'src/patient/patient.entity';

@Entity()
export class Reservation extends BaseEntity {
  /**
   * Reservation UUID code.
   */
  @PrimaryColumn({ length: 36 })
  ResID: string;

  /**
   * Dni of the patient making the reservation.
   */
  @Column({ length: 11 })
  @ManyToOne(
    type => Patient,
    patient => patient.PatientDni
  )
  PatientDni: string;

  /**
   * UUID of the bed assigned to the reservation.
   */
  @Column({ length: 36 })
  @ManyToOne(
    type => Bed,
    bed => bed.BedID
  )
  BedID: string;

  /**
   * Patient's admission date.
   */
  @Column()
  ArrivalDate: Date;
}