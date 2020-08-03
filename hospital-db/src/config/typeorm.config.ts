import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Bed } from "src/beds/beds.entity";
import { Room } from "src/room/room.entity";
import { MedicalEquipment } from "src/medical-equipment/medical-equiment.entity";
import { Staff } from "src/staff/staff.entity";
import { MedicalProcedure } from "src/medical-procedure/medical-procedure.entity";
import { ClinicalRecord } from "src/clinical-records/clinical-records.entity";
import { Address } from "src/address/address.entity";
import { Pathology } from "src/pathology/pathology.entity";
import { Patient } from "src/patient/patient.entity";
import { Reservation } from "src/reservation/reservation.entity";
import { Treatment } from "src/treatment/treatment.entity";

/**
 * Configuration of the postgres connection
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'hospital-bd-2022.postgres.database.azure.com',
    port: 5432,
    username: 'orbeteam@hospital-bd-2022',
    password: '-_T>"J#+4FeA',
    database: 'hospitalDB',
    entities: [
        Bed,
        Room,
        MedicalEquipment,
        Staff,
        MedicalProcedure,
        ClinicalRecord,
        Address,
        Pathology,
        Patient,
        Reservation,
        Treatment    
    ],
    synchronize: true,
    ssl: true
};