import { Repository, EntityRepository } from "typeorm";
import { Patient } from "./patient.entity";
import { PatientDTO } from "./dto/patient.dto";

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient>{
    createPatient(dataPatient: PatientDTO){
        const {Dni, DoB, address, OtherSigns, LastName, Name, Phone, Sex, pathologies} = dataPatient;
        const patient = new Patient();
        patient.Dni = Dni;
        patient.Name = Name;
        patient.DoB = DoB;
        patient.LastName = LastName;
        patient.address = address;
        patient.OtherSigns = OtherSigns;
        patient.Phone = Phone;
        patient.Sex = Sex;
        patient.pathologies = pathologies;
    }
}