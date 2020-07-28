import { Controller, Get, Query, Param, Post } from '@nestjs/common';
import { ClinicalRecordsService } from './clinical-records.service';

@Controller('/clinical-records')
export class ClinicalRecordsController {

  constructor(private clinicalRecordService: ClinicalRecordsService) {}

  @Get(':/dni')
  getPatientRecords(@Param('dni') dni: string) {
    return this.clinicalRecordService.getPatientRecords(dni);
  }

  @Post()
  createClinicalRecord() {
    
  }
}
