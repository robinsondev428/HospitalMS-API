import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { ClinicalRecord } from 'src/clinical-records/clinical-records.entity';

@Entity()
export class Treatment extends BaseEntity {
  /**
   * Id of the record
   */
  @PrimaryColumn({ length: 36 })
  @ManyToOne(
    type => ClinicalRecord,
    record => record.RecordID,
    { eager: false },
  )
  RecordId: string;

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
