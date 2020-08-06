import { BaseEntity, Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class MedicalProcedure extends BaseEntity {
  /**
   * Id of the procedure
   */
  @PrimaryGeneratedColumn("uuid")
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