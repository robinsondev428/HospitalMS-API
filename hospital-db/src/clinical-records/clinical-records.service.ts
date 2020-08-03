import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicalRecordsRepository } from './clinical-records.repository';
import { ClinicalRecord } from './clinical-records.entity';
import { CreateClinicalRecordDTO } from './dto/create-clinicalRecord.dto';

@Injectable()
export class ClinicalRecordsService {

  constructor(
    @InjectRepository(ClinicalRecordsRepository)
    private recordRepository: ClinicalRecordsRepository,
  ) {}

  /**
   * Gets the record with the given id.
   * @param id 
   */
  async getRecordById(id: string): Promise<ClinicalRecord> {
    const record = await this.recordRepository.findOne(id);
    if(!record){
      const errorMessage = `Record with ID: "${id}" not found`
      throw new NotFoundException(errorMessage);
    }
    
    return record;
  }

  /**
   * Obtains a patient's medical history.
   * @param dni 
   */
  async getPatientRecords(dni: string): Promise<ClinicalRecord[]> {
    const records = await this.recordRepository
          .createQueryBuilder("record")
          .where("record.patient.Dni = :Dni",{Dni: dni})
          .getMany();
    return records;
  }

  /**
   * Allows to add a new clinical record to the database.
   * @param recordDTO 
   */
  async createClinicalRecord(recordDTO: CreateClinicalRecordDTO): Promise<ClinicalRecord> {
    const record = await this.recordRepository.createClinicalRecord(recordDTO);
    return record;
  }
  
  /**
   * Edit the medical procedure of a medical record.
   * @param recordId 
   * @param procedureId 
   */
  async updateRecordProcedure(recordId: string, procedureId: string):Promise<ClinicalRecord> {
    const record = await this.getRecordById(recordId);
    const procedure = await this.recordRepository.ExistsProcedure(procedureId);

    record.procedure = procedure; // Set the new procedure to the record
    await record.save();

    return record;
  }

  /**
   * Delete a clinical record from the database.
   * @param id 
   */
  async deleteClinicalRecord(id: string): Promise<void> {
    const record = await this.recordRepository.delete(id);

    if(record.affected === 0) {
      const errorMessage = `Record with ID: "${id}" not found.`
      throw new NotFoundException(errorMessage);
    }
  }
}
