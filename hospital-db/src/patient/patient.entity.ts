import { BaseEntity, Entity, PrimaryColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { ISexType }  from './type-sex.enum';
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
  @PrimaryColumn({length: 11})
  Dni: string;
  
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
  Phone: string;
  
  /**
   * Postal Code.
   */
  @OneToOne(type => Address)
  @JoinColumn()
  address: Address;
  
  /**
   * Address detail.
   */
  @Column({length:255})
  OtherSigns: string;

  /**
   * 
   */
  @OneToMany(
    type => Reservation,
    reservation => reservation.Patient)
  reservations: Reservation

  /**
   * 
   */
  @OneToMany(
    type => Pathology,
    pathology => pathology.Patient
  )
  pathologies: Pathology[];

  @OneToMany(
    type => ClinicalRecord,
    clinicalRecord => clinicalRecord.patient
  )
  clinicalRecords: ClinicalRecord[];

}