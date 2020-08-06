import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { type } from 'os';
import { Patient } from 'src/patient/patient.entity';

@Entity()
export class Pathology extends BaseEntity {

  /**
   * Patient's Dni.
   */
  @ManyToOne(
    type => Patient,
    patient => patient.dni,
    { 
      primary: true,
      onDelete: 'CASCADE' 
    })
  patient: Patient
  
  /**
   * Pathology name.
   */
  @PrimaryColumn({length:60})
  name: string;
  
  /**
   * Pathology treatment.
   */
  @Column({length:255})
  treatment: string;

}