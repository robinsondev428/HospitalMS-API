/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { Bed } from 'src/beds/beds.entity';
import { Patient } from 'src/patient/patient.entity';
import { MedicalProcedure } from '../medical-procedure/medical-procedure.entity';

@Entity()
export class Reservation extends BaseEntity {
  /**
   * Reservation UUID code.
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * Dni of the patient making the reservation.
   */

  @ManyToOne(
    type => Patient,
    patient => patient.dni,
    {onDelete:'CASCADE'}
  )
  patient_: Patient;

  /**
   * UUID of the bed assigned to the reservation.
   */
  @ManyToOne(
    type => Bed,
    bed => bed.id
  )
  bed_: Bed;

  /**
   * Patient's admission date.
   */
  @Column()
  arrival_date: Date;

  /**
   * Patient's admission date.
   */
  @Column({nullable: true})
  departure_date: Date;

  /**
   * List of procedures 
   */
  @ManyToMany( type => MedicalProcedure)
  @JoinTable()
  procedures: MedicalProcedure[];
}