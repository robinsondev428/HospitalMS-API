/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { IRoleType } from  './dto/type-role.enum';
import { type } from 'os';
import { Address } from 'src/address/address.entity';

@Entity()
export class Staff extends BaseEntity {

  /**
   * Employee ID.
   */
  @PrimaryColumn({length:11})
  dni: string;
  
  /**
   * Employee username.
   */
  @Column({length:15})
  username: string;
  
  /**
   * Employee password.
   */
  @Column({length:20})
  password: string;
  
  /**
   * Name of the employee.
   */
  @Column({length:30})
  name: string;
  
  /**
   * Employee's last name.
   */
  @Column({length:50})
  lastname: string;
  
  /**
   * Date of birth.
   */
  @Column()
  dob: Date;
  
  /**
   * Phone number.
   */
  @Column({length:15})
  phone:  string;
  
  /**
   * Postal Code.
   */
  @ManyToOne(
    type => Address,
    address => address.staff)
  address: Address;
  
  /**
   * Detailed address.
   */
  @Column({length:255})
  other_signs: string;
  
  /**
   * Date of admission as a hospital worker.
   */
  @Column()
  startDate: Date;
  
  /**
   * Role of the employee in the hospital.
   */
  @Column()
  role: IRoleType;
}