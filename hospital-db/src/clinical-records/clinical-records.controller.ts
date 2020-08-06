/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Query, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { CreateClinicalRecordDTO } from './dto/create-clinicalRecord.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClinicalRecord } from './clinical-records.entity';
import { UpdateClinicalRecordDTO } from './dto/update-clinicalRecord.dto';

@ApiTags('Clinical Records')
@Controller('clinical-records')
export class ClinicalRecordsController {
  /**
   * First method
   * @param clinicalRecordService clinical record service
   */
  constructor(private clinicalRecordService: ClinicalRecordsService) {}
  /**
   * get the data from a patient
   * @param dni of the patient
   */
  @ApiOperation({ summary: 'Obtains a patients medical history' })
  @ApiResponse({ status: 200, type: [ClinicalRecord] })
  @Get('patient/:dni')
  getPatientRecords(@Param('dni') dni: string) {
    return this.clinicalRecordService.getPatientRecords(dni);
  }
  /**
   * Get the information of a medical record by id 
   * @param id of the medical record
   */
  @ApiOperation({ summary: 'Get the detail of a medical record' })
  @ApiResponse({ status: 200, type: ClinicalRecord })
  @Get('/:id')
  getRecordById(@Param('id') id: string) {
    return this.clinicalRecordService.getRecordById(id);
  }
  /**
   * Create a new record
   * @param createRecordDTO data of the record
   */
  @ApiOperation({ summary: 'Create a medical record' })
  @ApiResponse({ status: 201, type: ClinicalRecord })
  @Post()
  createClinicalRecord(@Body() createRecordDTO: CreateClinicalRecordDTO) {
    return this.clinicalRecordService.createClinicalRecord(createRecordDTO);
  }

  /**
   * Create a new clinical record
   * @param id id of the record
   * @param procedureId id of the medical procedure
   */
  @ApiOperation({ summary: 'Edit the medical procedure of a clinical record' })
  @ApiResponse({ status: 200, type: ClinicalRecord })
  @Patch('/:id/edit')
  updateRecordProcedure(
    @Param('id') id: string,
    @Body() updateRecordDTO: UpdateClinicalRecordDTO,
  ) {
    return this.clinicalRecordService.updateRecordProcedure(id, updateRecordDTO);
  }
  /**
   * Delete a clinical record
   * @param id of the record
   */
  @ApiOperation({ summary: 'Delete a clinical record' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteClinicalRecord(@Param('id') id: string): void {
    this.clinicalRecordService.deleteClinicalRecord(id);
  }
}
