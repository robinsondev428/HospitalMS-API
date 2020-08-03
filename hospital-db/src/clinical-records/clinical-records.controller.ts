/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Query, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';
import { CreateClinicalRecordDTO } from './dto/create-clinicalRecord.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClinicalRecord } from './clinical-records.entity';

@ApiTags('Clinical Records')
@Controller('clinical-records')
export class ClinicalRecordsController {

  constructor(private clinicalRecordService: ClinicalRecordsService) {}

  @ApiOperation({ summary: 'Obtains a patients medical history' })
  @ApiResponse({ status: 200, type: [ClinicalRecord] })
  @Get('patient/:dni')
  getPatientRecords(@Param('dni') dni: string) {
    return this.clinicalRecordService.getPatientRecords(dni);
  }

  @ApiOperation({ summary: 'Get the detail of a medical record' })
  @ApiResponse({ status: 200, type: ClinicalRecord })
  @Get('/:id')
  getRecordById(@Param('id') id: string) {
    return this.clinicalRecordService.getRecordById(id);
  }

  @ApiOperation({ summary: 'Create a medical record' })
  @ApiResponse({ status: 201, type: ClinicalRecord })
  @Post()
  createClinicalRecord(@Body() createRecordDTO: CreateClinicalRecordDTO) {
    return this.clinicalRecordService.createClinicalRecord(createRecordDTO);
  }

  @ApiOperation({ summary: 'Edit the medical procedure of a clinical record' })
  @ApiResponse({ status: 200, type: ClinicalRecord })
  @Patch('/:id/procedure')
  updateRecordProcedure(
    @Param('id') id: string,
    @Body('procedureId') procedureId: string,
  ) {
    return this.clinicalRecordService.updateRecordProcedure(id, procedureId);
  }

  @ApiOperation({ summary: 'Delete a clinical record' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteClinicalRecord(@Param('id') id: string): void {
    this.clinicalRecordService.deleteClinicalRecord(id);
  }
}
