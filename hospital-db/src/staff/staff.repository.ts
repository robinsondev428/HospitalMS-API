/* eslint-disable @typescript-eslint/camelcase */
import { Repository, EntityRepository, Connection } from "typeorm";
import { Staff } from "./staff.entity";
import { CreateStaffDTO } from "./dto/create-staff.dto";
import { Address } from '../address/address.entity';
import { StaffDTO } from "./dto/staff.dto";
@EntityRepository(Staff)
export class StaffRepository extends Repository<Staff>{

  constructor(private connection: Connection) {
    super();
  }

  /**
   * create a new member of the staff
   * @param createStaffDTO 
   */
  async createStaff( createStaffDTO: CreateStaffDTO) {
    const {password, username, dni, name, lastname, dob, otherSigns, phone, role, startDate, province, canton, district} = createStaffDTO;
    const staff = new Staff();

    staff.dni = dni;
    staff.name = name;
    staff.lastname = lastname;
    staff.dob = dob;
    staff.password = password;
    staff.username = username;
    staff.address = await this.getAddress(province,canton,district);

    staff.other_signs = otherSigns;
    staff.phone = phone;

    staff.role = role;
    staff.startDate = startDate;
    
    await staff.save();

    return staff;
  }

  /**
   * Get all the member of the staff
   */
  async getAllStaff(): Promise<StaffDTO[]> {
    const staff: StaffDTO[] = await this.query(`select * from get_all_staff_summary`);
    return staff;
  }

  /**
   * Return the address
   * @param province of the member
   * @param canton of the member
   * @param district of the member
   */
  private async getAddress(province: string, canton: string, district: string): Promise<Address> { 
    const addressRepository = this.connection.getRepository(Address);
    const address = await addressRepository
                      .createQueryBuilder("address")
                      .where("address.province = :province",{province: province})
                      .andWhere("address.canton = :canton",{canton: canton})
                      .andWhere("address.district = :district",{district: district})
                      .getOne();

    return address;
  }
    
}