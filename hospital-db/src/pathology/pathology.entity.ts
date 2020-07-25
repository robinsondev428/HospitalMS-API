import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Pathology extends BaseEntity {

  /**
   * Patient's Dni.
   */
  @PrimaryColumn({length:11})
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