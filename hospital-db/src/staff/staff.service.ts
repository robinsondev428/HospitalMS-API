/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { StaffRepository } from './staff.repository';
import { CreateStaffDTO } from './dto/create-staff.dto';
import { UpdateStaffDTO } from './dto/update-staff.dto';
import { StaffDTO } from './dto/staff.dto';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private staffRepository: StaffRepository,
  ){}
  
  /**
   * get one member
   * @param dni of the member
   */
  async getStaffByDniRaw(dni: string): Promise<Staff> {
    const staff = await this.staffRepository.findOne(dni);
    if (!staff) {
      const errorMessage = `Staff with DNI ${dni} not found`;
      throw new NotFoundException(errorMessage);
    }
    return staff;
  }

/**
 * 
 * @param dni 
 */
  async getStaffByDni(dni: string): Promise<StaffDTO> {
    const found = await this.getStaffByDniRaw(dni);

    const result: StaffDTO[] = await this.staffRepository.query(`select * from hsp_get_staff_summary('${dni}')`);
    return result[0];
  }

  /**
   * get all the members
   */
  async getAllStaff(): Promise<StaffDTO[]> {
    return await this.staffRepository.getAllStaff();
  }

  /**
   * Create a new member
   * @param createStaffDTO data of the new member
   */
  async createStaff(createStaffDTO: CreateStaffDTO): Promise<Staff> {
    return this.staffRepository.createStaff(createStaffDTO);
  }

  /**
   * delete the member
   * @param dni of the member
   */
  async deleteStaff(dni: string): Promise<void> {
    const result = await this.getStaffByDniRaw(dni);

    // There is already a guarantee that the entity exists in the database
    if (result) {
      await this.staffRepository.delete(dni);
    }
  }
  /**
   * Update the data for the staff
   * @param dni of the member
   * @param updateStaffDTO data from the member
   */
  async updateStaff(dni: string, updateStaffDTO: UpdateStaffDTO): Promise<Staff> {
    const staff = await this.getStaffByDniRaw(dni);
    const {name, lastname, username, phone, role} = updateStaffDTO;
    
    staff.name = name;
    staff.lastname = lastname;
    staff.username = username;
    staff.phone = phone;
    staff.role = role;
    await staff.save();

    return staff;
  }
  /**
   * 
   * @param dni 
   * @param password 
   */
  async login(dni: string, password: string): Promise<Staff> {
    const staff = await this.staffRepository.findOne({where:{'username':dni}});
    if(!staff){
      const errorMessage = 'Staff Not found';
      throw new NotFoundException(errorMessage);
    }

    if(staff.password !== password){
      const errorMessage = 'Incorrect Password';
      throw new BadRequestException(errorMessage);
    }
    return staff;
  }

}
