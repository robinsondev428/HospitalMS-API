import { BaseEntity, Entity, PrimaryColumn, Column} from 'typeorm';

@Entity()
export class MedicalProcedure extends BaseEntity {
  /**
   * Id of the procedure
   */
  @PrimaryColumn({length: 36})
  id: string;

  /**
   * Name of the procedure
   */
  @Column()
  name: string;

  /**
   * Description of the procedure
   */
  @Column()
  description: string;

  /**
   * Time spent in the procedure
   */
  @Column()
  time: number;

}