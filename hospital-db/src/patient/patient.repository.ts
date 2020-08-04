import { Repository, EntityRepository } from "typeorm";
import { Patient } from "./patient.entity";
import { PatientDTO } from "./dto/patient.dto";
import { v1 as uuidv1 } from 'uuid';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient>{
    async createPatient(dataPatient: PatientDTO){
        const { DoB, address, OtherSigns, LastName, Name, Phone, Sex, pathologies, Password} = dataPatient;
        const patient = new Patient();
        patient.Dni = uuidv1();
        patient.Name = Name;
        patient.DoB = DoB;
        patient.LastName = LastName;
        patient.address = address;
        patient.OtherSigns = OtherSigns;
        patient.Phone = Phone;
        patient.Sex = Sex;
        patient.Password = Password;
        patient.pathologies = pathologies;
        return await patient.save()
    }
}