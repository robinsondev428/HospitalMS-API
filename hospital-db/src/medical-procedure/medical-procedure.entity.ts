import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ClinicalRecord } from '../clinical-records/clinical-records.entity';

@Entity()
export class MedicalProcedure extends BaseEntity {
  /**
   * Id of the procedure
   */
  @PrimaryColumn({length: 36})
  Id: string;

  /**
   * Name of the procedure
   */
  @Column()
  Name: string;

  /**
   * Description of the procedure
   */
  @Column()
  Description: string;

  /**
   * Time spent in the procedure
   */
  @Column()
  Time: number;

}