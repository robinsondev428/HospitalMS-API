import { BaseEntity, Entity } from 'typeorm';

@Entity()
export class MedicalProcedure extends BaseEntity {
  Id: string;
  Name: string;
  Description: string;
  Time: number;
}