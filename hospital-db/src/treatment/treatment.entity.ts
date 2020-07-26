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
    { primary: true}
  )
  clinicalRecord: ClinicalRecord;

  /**
   * Name of the treatment
   */
  @Column({ length: 60 })
  Name: string;

  /**
   * Description of the treatment
   */
  @Column({ length: 255 })
  Description: string;
}
