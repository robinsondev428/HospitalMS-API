import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class MedicalProcedure extends BaseEntity {
  @PrimaryColumn()
  Id: string;
  @Column()
  Name: string;
  @Column()
  Description: string;
  @Column()
  Time: number;
}