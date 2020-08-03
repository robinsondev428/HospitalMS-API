import { Module } from '@nestjs/common';
import { ClinicalRecordsController } from './clinical-records.controller';
import { ClinicalRecordsService } from './clinical-records.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicalRecordsRepository } from './clinical-records.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClinicalRecordsRepository]),
  ],
  controllers: [ClinicalRecordsController],
  providers: [ClinicalRecordsService]
})
export class ClinicalRecordsModule {}
