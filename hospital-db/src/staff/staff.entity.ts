import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { IRoleType } from  './type-role.enum';

@Entity()
export class Staff extends BaseEntity {

  /**
   * Employee ID.
   */
  @PrimaryColumn({length:11})
  StaffDni: string;
  
  /**
   * Employee username.
   */
  @Column({length:15})
  Username: string;
  
  /**
   * Employee password.
   */
  @Column({length:20})
  Password: string;
  
  /**
   * Name of the employee.
   */
  @Column({length:30})
  Name: string;
  
  /**
   * Employee's last name.
   */
  @Column({length:50})
  LastName: string;
  
  /**
   * Date of birth.
   */
  @Column()
  DoB: Date;
  
  /**
   * Phone number.
   */
  @Column({length:15})
  Phone:  string;
  
  /**
   * Postal Code.
   */
  @Column({length:5})
  CP: string;
  
  /**
   * Detailed address.
   */
  @Column({length:255})
  OtherSigns: string;
  
  /**
   * Date of admission as a hospital worker.
   */
  @Column()
  StartDate: Date;
  
  /**
   * Role of the employee in the hospital.
   */
  @Column()
  Role: IRoleType;
}