/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, PrimaryColumn, Column, Entity, ManyToOne, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Patient } from 'src/patient/patient.entity';
import { MedicalProcedure } from 'src/medical-procedure/medical-procedure.entity';
import { Treatment } from '../treatment/treatment.entity';
@Entity()
export class ClinicalRecord extends BaseEntity {

  /**
   * Registration code.
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * Date the registration is made.
   */
  @Column()
  date: Date;

  /**
   * Procedure performed on the patient.
   */
  @OneToOne(type => MedicalProcedure)
  @JoinColumn()
  procedure: MedicalProcedure;

  /**
   * Patient's Dni.
   */
  @ManyToOne(
    type => Patient,
    patient => patient.clinicalRecords,
    {onDelete:'CASCADE'})
  patient: Patient;
  
  /**
   * one to many treatment
   */
  @OneToMany(
    type => Treatment,
    treatment => treatment.clinicalRecord
  )
  treatment: Treatment[];
}