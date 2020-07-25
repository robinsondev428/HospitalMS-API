import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { ISexType }  from './type-sex.enum';

@Entity()
export class Patient extends BaseEntity {

  /**
   * Patient's Dni.
   */
  @PrimaryColumn({length: 11})
  PatientDni: string;
  
  /**
   * Password.
   */
  @Column({length:20})
  Password: string;
  
  /**
   * Patient first name.
   */
  @Column({length:30})
  Name: string;
  
  /**
   * Patient lastname.
   */
  @Column({length:50})
  LastName: string;
  
  /**
   * Day of Birth.
   */
  @Column()
  DoB: Date;
  
  /**
   * Patient sex.
   */
  @Column()
  Sex: ISexType;
  
  /**
   * Patient phone number.
   */
  @Column({length:15})
  Phone:  string;
  
  /**
   * Postal Code.
   */
  @Column({length:5})
  CP: string;
  
  /**
   * Address detail.
   */
  @Column({length:255})
  OtherSigns: string;
}