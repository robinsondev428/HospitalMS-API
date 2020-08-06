/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, Column, ManyToOne } from 'typeorm';
import { ClinicalRecord } from 'src/clinical-records/clinical-records.entity';

@Entity()
export class Treatment extends BaseEntity {
  /**
   * Id of the record
   */
  @ManyToOne(
    type => ClinicalRecord,
    record => record.treatment,
    { primary: true,
      onDelete:'CASCADE'})
  clinicalRecord: ClinicalRecord;

  /**
   * Name of the treatment
   */
  @Column({ length: 60 })
  name: string;

  /**
   * Description of the treatment
   */
  @Column({ length: 255 })
  description: string;
}
