/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Staff } from 'src/staff/staff.entity';
import { Patient } from '../patient/patient.entity';

@Entity()
export class Address extends BaseEntity {
  /**
   * Postal code of the address
   */
  @PrimaryColumn({ length: 5 })
  cp: string;

  /**
   * Province of the address
   */
  @Column({ length: 10 })
  province: string;

  /**
   * Canton of the address
   */
  @Column({ length: 15 })
  canton: string;

  /**
   * District of the address
   */
  @Column({ length: 15 })
  district: string;

  @OneToMany(
    type => Staff,
    staff  => staff.address)
  staff: Staff[];

  @OneToMany(
    type => Patient,
    patient => patient.address_)
  patients: Patient[];
}
