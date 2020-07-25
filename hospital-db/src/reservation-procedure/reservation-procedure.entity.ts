import { BaseEntity, PrimaryColumn } from 'typeorm';

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