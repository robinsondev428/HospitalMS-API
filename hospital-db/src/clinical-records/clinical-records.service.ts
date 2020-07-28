import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicalRecordsRepository } from './clinical-records.repository';
import { ClinicalRecord } from './clinical-records.entity';

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
      const errorMessage: string = `Record with ID: "${id}" not found`
      throw new NotFoundException(errorMessage);
    }
    
    return record;
  }

  async getPatientRecords(dni: string): Promise<ClinicalRecord[]> {
    const records = await this.recordRepository
          .createQueryBuilder("record")
          .where("record.patient.Dni =: dni",{Dni: dni})
          .getMany();
    return records;
  }
}
