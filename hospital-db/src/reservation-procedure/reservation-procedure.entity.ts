import { BaseEntity, PrimaryColumn, Entity, ManyToOne, OneToMany } from 'typeorm';
import { MedicalProcedure } from 'src/medical-procedure/medical-procedure.entity';
import { Reservation } from 'src/reservation/reservation.entity';

@Entity()
export class ReservationProcedures extends BaseEntity {
  
  /**
   * Reservation UUID code.
   */
  @PrimaryColumn({length:36})
  @OneToMany(
    type => Reservation,
    reservation => reservation.ResID
  )
  ResID: string;

  /**
   * Procedure UUID code.
   */
  @PrimaryColumn({length:36})
  @ManyToOne(
    type => MedicalProcedure,
    procedure => procedure.Id
  )
  ProcedureID: string;
}