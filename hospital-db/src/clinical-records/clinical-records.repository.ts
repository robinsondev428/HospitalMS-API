import { Repository, EntityRepository } from "typeorm";
import { ClinicalRecord } from "./clinical-records.entity";
import { CreateClinicalRecordDTO } from "./dto/create-clinicalRecord.dto";
import { v1 as uuid } from "uuid";
import { PatientRepository } from '../patient/patient.repository';
import { NotFoundException } from '@nestjs/common';
import { MedicalProcedureRepository } from '../medical-procedure/medical-procedure.repository';
@EntityRepository(ClinicalRecord)
export class ClinicalRecordsRepository extends Repository<ClinicalRecord>{

  /**
   * Create an instance of a clinical record and save it in the database.
   * @param createRecordDTO 
   */
  async createClinicalRecord(createRecordDTO: CreateClinicalRecordDTO): Promise<ClinicalRecord> {
    
    const {Date, ProcedureId, PatientDni} = createRecordDTO;

    // Get the procedure and the patient.
    const recordRepository = new MedicalProcedureRepository();
    const foundProcedure = await recordRepository.findOne(ProcedureId);
    if(!foundProcedure){
      const errorMessage: string = `Procedure with ID ${ProcedureId} not found`
      throw new NotFoundException(errorMessage);
    }
    
    const patientRepository  = new PatientRepository();
    const foundPatient = await patientRepository.findOne(PatientDni);
    if(!foundPatient){
      const errorMessage: string = `Patient with DNI: "${PatientDni}" not found`
      throw new NotFoundException(errorMessage);
    }

    // Set record id, date, patient and procedure
    const record = new ClinicalRecord();

    record.Id = uuid(); // Generate a uuid for the record.
    record.Date = Date;
    record.procedure = foundProcedure;
    record.patient = foundPatient;
    await record.save(); // Save record

    return record;
    
  }
}