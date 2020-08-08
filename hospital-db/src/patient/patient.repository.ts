/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
import { Repository, EntityRepository, Connection } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Address } from '../address/address.entity';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  constructor(private connection: Connection) {
    super();
  }

  /**
   * Create and enter a new patient into the database.
   * @param createPatientDTO 
   */
  async createPatient(createPatientDTO: CreatePatientDTO) {
    const {
      dni,
      name,
      lastname,
      password,
      dob,
      phone,
      province,
      canton,
      district,
      other_signs,
      sex,
      pathologies,
    } = createPatientDTO;

    const patient = new Patient();
    patient.dni = dni;
    patient.name = name;
    patient.lastname = lastname;
    patient.dob = dob;

    patient.address_ = await this.getAddress(province,canton,district);
    patient.other_signs = other_signs;
    patient.phone = phone;
    patient.sex = sex;
    patient.password = password;
    patient.pathologies = pathologies;
    await patient.save();

    return patient;
  }

  /**
   * Return the address
   * @param province of the member
   * @param canton of the member
   * @param district of the member
   */
  private async getAddress(
    province: string,
    canton: string,
    district: string,
  ): Promise<Address> {
    const addressRepository = this.connection.getRepository(Address);
    const address = await addressRepository
      .createQueryBuilder('address')
      .where('address.province = :province', { province: province })
      .andWhere('address.canton = :canton', { canton: canton })
      .andWhere('address.district = :district', { district: district })
      .getOne();

    return address;
  }
}
