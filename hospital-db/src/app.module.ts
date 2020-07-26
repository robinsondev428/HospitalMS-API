import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { BedsModule } from './beds/beds.module';
import { StaffModule } from './staff/staff.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalEquipmentModule } from './medical-equipment/medical-equipment.module';
import { MedicalProcedureModule } from './medical-procedure/medical-procedure.module';
import { ClinicalRecordsModule } from './clinical-records/clinical-records.module';
import { PathologyModule } from './pathology/pathology.module';
import { PatientModule } from './patient/patient.module';
import { ReservationModule } from './reservation/reservation.module';
import { AddressModule } from './address/address.module';
import { TreatmentModule } from './treatment/treatment.module';
import { ReservationProcedureModule } from './reservation-procedure/reservation-procedure.module';
import { EquimentBedModule } from './equiment-bed/equiment-bed.module';

@Module({
  imports: [
    RoomModule,
    BedsModule,
    StaffModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    MedicalEquipmentModule,
    MedicalProcedureModule,
    ClinicalRecordsModule,
    PathologyModule,
    PatientModule,
    ReservationModule,
    AddressModule,
    TreatmentModule,
    ReservationProcedureModule,
    EquimentBedModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
