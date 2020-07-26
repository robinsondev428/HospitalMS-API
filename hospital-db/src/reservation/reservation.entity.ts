import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { type } from 'os';
import { Bed } from 'src/beds/beds.entity';
import { Patient } from 'src/patient/patient.entity';
import { MedicalProcedure } from '../medical-procedure/medical-procedure.entity';

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

  @ManyToOne(
    type => Patient,
    patient => patient.Dni
  )
  Patient: Patient;

  /**
   * UUID of the bed assigned to the reservation.
   */
  @ManyToOne(
    type => Bed,
    bed => bed.Id
  )
  Bed: Bed;

  /**
   * Patient's admission date.
   */
  @Column()
  ArrivalDate: Date;

  /**
   * 
   */
  @ManyToMany( type => MedicalProcedure)
  @JoinTable()
  procedures: MedicalProcedure[];
}