/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClinicalRecordsRepository } from './clinical-records.repository';
import { ClinicalRecord } from './clinical-records.entity';
import { CreateClinicalRecordDTO } from './dto/create-clinicalRecord.dto';
import { UpdateClinicalRecordDTO } from './dto/update-clinicalRecord.dto';
import { ClinicalRecordDTO } from './dto/clinicalRecord.dto';

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
  async getRecordByIdRaw(id: string): Promise<ClinicalRecord> {
    const record = await this.recordRepository.findOne(id);
    if (!record) {
      const errorMessage = `Record with ID: "${id}" not found`;
      throw new NotFoundException(errorMessage);
    }

    return record;
  }

  /**
   * 
   * @param id 
   */
  async getRecordById(id: string): Promise<ClinicalRecordDTO> {
    const found = await this.recordRepository.findOne(id);

    const query = `select cr.id, cr."procedureId" as procedure_id,mp.name as procedure,cr.treatment,cr.date::date
                  from clinical_record cr join medical_procedure mp
                  on mp.id = cr."procedureId"
                  where cr.id ='${id}'`;
    const record: ClinicalRecordDTO = await this.recordRepository.query(query);
    return record[0];
  }

  /**
   * Obtains a patient's medical history.
   * @param dni
   */
  async getPatientRecords(dni: string): Promise<ClinicalRecordDTO[]> {
    const records: ClinicalRecordDTO[] = await this.recordRepository.query(
      `select * from hsp_get_clinical_records('${dni}')`);
    return records;
  }

  /**
   * Allows to add a new clinical record to the database.
   * @param recordDTO
   */
  async createClinicalRecord(
    recordDTO: CreateClinicalRecordDTO,
  ): Promise<ClinicalRecord> {
    const record = await this.recordRepository.createClinicalRecord(recordDTO);
    return record;
  }

  /**
   * Edit the medical procedure of a medical record.
   * @param recordId
   * @param procedureId
   */
  async updateRecordProcedure(
    recordId: string,
    updateRecordDTO: UpdateClinicalRecordDTO,
  ): Promise<ClinicalRecord> {
    const record = await this.getRecordByIdRaw(recordId);
    const { date, procedure_id, treatment } = updateRecordDTO;

    record.date = date;
    record.treatment = treatment;
    record.procedure = await this.recordRepository.ExistsProcedure(
      procedure_id,
    ); // Set the new procedure to the record
    await record.save();

    return record;
  }

  /**
   * Delete a clinical record from the database.
   * @param id
   */
  async deleteClinicalRecord(id: string): Promise<void> {
    const record = await this.recordRepository.delete(id);

    if (record.affected === 0) {
      const errorMessage = `Record with ID: "${id}" not found.`;
      throw new NotFoundException(errorMessage);
    }
  }
}
