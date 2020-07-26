import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Patient } from 'src/patient/patient.entity';

@Entity()
export class Pathology extends BaseEntity {

  /**
   * Patient's Dni.
   */
  @PrimaryColumn({length:11})
  @ManyToOne(
    type => Patient,
    patient => patient.PatientDni,
    {eager: false}
  )
  PatientDni: string;
  
  /**
   * Pathology name.
   */
  @Column({length:60})
  Name: string;
  
  /**
   * Pathology treatment.
   */
  @Column({length:255})
  Description: string;
}