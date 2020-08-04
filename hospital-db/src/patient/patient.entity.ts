/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseEntity, Entity, PrimaryColumn, Column, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { ISexType }  from './dto/type-sex.enum';
import { type } from 'os';
import { Address } from 'src/address/address.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { Pathology } from 'src/pathology/pathology.entity';
import { ClinicalRecord } from '../clinical-records/clinical-records.entity';

@Entity()
export class Patient extends BaseEntity {

  /**
   * Patient's Dni.
   */
  @PrimaryColumn({length: 255})
  dni: string;
  
  /**
   * Password.
   */
  @Column({length:20})
  password: string;
  
  /**
   * Patient first name.
   */
  @Column({length:30})
  name: string;
  
  /**
   * Patient lastname.
   */
  @Column({length:50})
  lastname: string;
  
  /**
   * Day of Birth.
   */
  @Column()
  dob: Date;
  
  /**
   * Patient sex.
   */
  @Column()
  sex: ISexType;
  
  /**
   * Patient phone number.
   */
  @Column({length:15})
  phone: string;
  
  /**
   * Postal Code.
   */
  @ManyToOne(
    type => Address,
    address => address.patients)
  address: Address;
  
  /**
   * Address detail.
   */
  @Column({length:255})
  other_signs: string;

  /**
   * Reservation of a bed
   */
  @OneToMany(
    type => Reservation,
    reservation => reservation.patient)
  reservations: Reservation

  /**
   * Pathologies of the patient
   */
  @OneToMany(
    type => Pathology,
    pathology => pathology.patient
  )
  pathologies: Pathology[];
    /**
     * Clinical records of the page
     */
  @OneToMany(
    type => ClinicalRecord,
    clinicalRecord => clinicalRecord.patient
  )
  clinicalRecords: ClinicalRecord[];

}