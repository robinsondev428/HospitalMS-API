import { Repository, EntityRepository, Connection } from "typeorm";
import { ClinicalRecord } from './clinical-records.entity';
import { CreateClinicalRecordDTO } from "./dto/create-clinicalRecord.dto";
import { v1 as uuid } from "uuid";
import { NotFoundException } from '@nestjs/common';
import { Patient } from '../patient/patient.entity';
import { MedicalProcedure } from '../medical-procedure/medical-procedure.entity';
@EntityRepository(ClinicalRecord)
export class ClinicalRecordsRepository extends Repository<ClinicalRecord>{

  constructor(private connection: Connection) {
    super();
  }
  /**
   * Create an instance of a clinical record and save it in the database.
   * @param createRecordDTO 
   */
  async createClinicalRecord(createRecordDTO: CreateClinicalRecordDTO): Promise<ClinicalRecord> {
    
    const {Date, ProcedureId, PatientDni} = createRecordDTO;

    // Get the procedure and the patient.
    const procedure = await this.ExistsProcedure(ProcedureId);
    const patient = await this.ExistsPatient(PatientDni);
    

    // Set record id, date, patient and procedure
    const record = new ClinicalRecord();

    record.Id = uuid(); // Generate a uuid for the record.
    record.Date = Date;
    record.procedure = procedure;
    record.patient = patient;
    await record.save(); // Save record

    return record;
    
  }

  /**
   * Check if there is a medical procedure with the given ID.
   * @param id 
   */
  async ExistsProcedure(id: string) {
    
    const recordRepository = this.connection.getRepository(MedicalProcedure);
    const foundProcedure = await recordRepository.findOne(id);
    
    if(!foundProcedure){ 
      const errorMessage = `Procedure with ID ${id} not found`
      throw new NotFoundException(errorMessage);
    }

    return foundProcedure;
  }

  /**
   * Check if there is a patient with the given DNI.
   */
  async ExistsPatient(dni: string) {
    const patientRepository = this.connection.getRepository(Patient);
    const foundPatient = await patientRepository.findOne(dni);

    if(!foundPatient){
      const errorMessage = `Patient with DNI: "${dni}" not found`
      throw new NotFoundException(errorMessage);
    }

    return foundPatient;
  }
}