import { BaseEntity, PrimaryColumn, Entity } from 'typeorm';

@Entity()
export class ReservationProcedures extends BaseEntity {
  
  /**
   * Reservation UUID code.
   */
  @PrimaryColumn({length:36})
  ResID: string;

  /**
   * Procedure UUID code.
   */
  @PrimaryColumn({length:36})
  ProcedureID: string;
}