/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PatientRepository } from './patient.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientDTO } from './dto/patient.dto';
import { isNull } from 'util';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientRepository)
    private patientRepository: PatientRepository,
  ) {}

  /**
   * 
   * @param dni 
   * @param password 
   */
  async login(dni: string, password: string): Promise<Patient> {
    const patient = await this.patientRepository.findOne(dni);
    
    if(!patient){
      const errorMessage = 'Patient Not found';
      throw new NotFoundException(errorMessage);
    }

    if(patient.password !== password){
      const errorMessage = 'Incorrect Password';
      throw new BadRequestException(errorMessage);
    }

    patient.password = "xxxx";
    return patient;
  }

  /**
   * Create a new patient
   * @param createPatientDTO data for the new patient
   */
  createPatient(createPatientDTO: CreatePatientDTO) {
    return this.patientRepository.createPatient(createPatientDTO);
  }
  /**
   * Get all the patients
   */
  async getAllPatient() {
    const patients: PatientDTO[] = await this.patientRepository.query(`select * from get_all_patient_summary`);
    return patients;
  }
  
  /**
   * Get one patient by dni
   * @param dni dni of the patient
   */
  async getPatientByDni(dni: string) {
    const found:PatientDTO[] = await this.patientRepository.query(`select * from hsp_get_patient_summary('${dni}')`);
    if (isNull(found)) {
      throw new NotFoundException(
        `Patient with DNI: "${dni}" not found`,
      );
    }
    return found[0];
  }
}
