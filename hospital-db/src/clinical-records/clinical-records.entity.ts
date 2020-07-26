import { BaseEntity, PrimaryColumn, Column, OneToMany, Entity, OneToOne } from 'typeorm';
import { Patient } from 'src/patient/patient.entity';
import { MedicalProcedure } from 'src/medical-procedure/medical-procedure.entity';
@Entity()
export class ClinicalRecord extends BaseEntity {

  /**
   * Registration code.
   */
  @PrimaryColumn({length:36})
  RecordID: string;

  /**
   * Date the registration is made.
   */
  @Column()
  Date: Date;

  /**
   * Procedure performed on the patient.
   */
  @Column({length:36})
  @OneToMany(
    type => MedicalProcedure,
    procedure => procedure.Id,
    {eager: false}
  )
  ProcedureID: string;

  /**
   * Patient's Dni.
   * TOOOO AASKKKKK
   */
  @Column({length:11})
  @OneToOne(
    type => Patient,
    patient => patient.PatientDni,
    { eager: false },)
  PatientDni: string;
}