import { BaseEntity, PrimaryColumn, Column, Entity, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Patient } from 'src/patient/patient.entity';
import { MedicalProcedure } from 'src/medical-procedure/medical-procedure.entity';
import { Treatment } from '../treatment/treatment.entity';
@Entity()
export class ClinicalRecord extends BaseEntity {

  /**
   * Registration code.
   */
  @PrimaryColumn({length:36})
  Id: string;

  /**
   * Date the registration is made.
   */
  @Column()
  Date: Date;

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
   * 
   */
  @OneToMany(
    type => Treatment,
    treatment => treatment.clinicalRecord
  )
  treatment: Treatment[];
}