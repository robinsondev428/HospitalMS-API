import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class MedicalProcedure extends BaseEntity {
  /**
   * Id of the procedure
   */
  @PrimaryColumn()
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