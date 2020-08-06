import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { StaffRepository } from './staff.repository';
import { CreateStaffDTO } from './dto/create-staff.dto';
import { UpdateStaffDTO } from './dto/update-staff.dto';

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
  async getStaffByDni(dni: string): Promise<Staff> {
    const staff = await this.staffRepository.findOne(dni);
    if (!staff) {
      const errorMessage = `Staff with DNI ${dni} not found`;
      throw new NotFoundException(errorMessage);
    }
    return staff;
  }

  /**
   * get all the members
   */
  async getAllStaff(): Promise<Staff[]> {
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
    const result = await this.getStaffByDni(dni);

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
    const staff = await this.getStaffByDni(dni);
    return staff;
  }


}
