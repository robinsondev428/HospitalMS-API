import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientRepository } from './patient.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientDTO } from './dto/patient.dto';
import { isNull } from 'util';
import { Address } from 'src/address/address.entity';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(PatientRepository)
        private patientRepository: PatientRepository){ }
        /**
         * Create a new patient
         * @param dataPatient data for the new patient
         */
        createPatient(dataPatient: PatientDTO){
            return this.patientRepository.createPatient(dataPatient);
        }
        /**
         * Get all the patients
         */
        async getAllPatient(){
            return await this.patientRepository.find();
        }
        /**
         * Update data for the patient
         * @param dniPatient dni of the patient
         * @param dataPatient data of the patient
         */
        async updatePatient(dniPatient: string,dataPatient: PatientDTO){
            const patient = await this.getPatient(dniPatient);
            const {Dni, DoB, address, OtherSigns, LastName, Name, Phone, Sex, pathologies} = dataPatient;
            patient.Dni = Dni;
            patient.DoB = DoB;
            patient.address = address;
            patient.OtherSigns = OtherSigns;
            patient.LastName = LastName;
            patient.Name = Name;
            patient.Phone = Phone;
            patient.Sex = Sex;
            patient.pathologies = pathologies;
            return await patient.save();
        }
        /**
         * Get one patient by dni 
         * @param dniPatient dni of the patient
         */
        async getPatient(dniPatient: string){
            const found = await this.patientRepository.findOne(dniPatient);
            if(isNull(found)){
                throw new NotFoundException(`El paciente con el dni ${dniPatient} no existe`)
            }
            return found;
        }
}
