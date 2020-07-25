import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Reservation extends BaseEntity {

  /**
   * Reservation UUID code.
   */
  @PrimaryColumn({length: 36})
  ResID: string;

  /**
   * Dni of the patient making the reservation.
   */
  @Column({length: 11})
  PatientDni: string;
  
  /**
   * UUID of the bed assigned to the reservation.
   */
  @Column({length: 36})
  BedID: string;
  
  /**
   * Patient's admission date.
   */
  @Column()
  ArrivalDate: Date;
}