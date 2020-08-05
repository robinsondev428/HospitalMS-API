import { Repository, EntityRepository } from "typeorm";
import { Patient } from "./patient.entity";
import { PatientDTO } from "./dto/patient.dto";
import { v4 as uuidv4 } from 'uuid';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient>{
    async createPatient(dataPatient: PatientDTO){
        const { DoB, address, OtherSigns, LastName, Name, Phone, Sex, pathologies, Password} = dataPatient;
        const patient = new Patient();
        patient.dni = uuidv4();
        patient.name = Name;
        patient.dob = DoB;
        patient.lastname = LastName;
        patient.address_ = address;
        patient.other_signs = OtherSigns;
        patient.phone = Phone;
        patient.sex = Sex;
        patient.password = Password;
        patient.pathologies = pathologies;
        return await patient.save()
    }
}