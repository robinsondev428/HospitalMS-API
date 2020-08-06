/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from './patient.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientDTO } from './dto/patient.dto';
import { isNull } from 'util';
import { CreatePatientDTO } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientRepository)
    private patientRepository: PatientRepository,
  ) {}
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
