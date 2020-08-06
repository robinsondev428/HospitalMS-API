/* eslint-disable @typescript-eslint/no-unused-vars */
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
   * 
   * @param dni 
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
  async getStaffByDni(dni: string): Promise<any> {
    const found = await this.getStaffByDniRaw(dni);

    const result = await this.staffRepository.query(`select * from hsp_get_staff_summary('${dni}')`);
    return result[0];
  }

  /**
   * 
   */
  async getAllStaff(): Promise<any[]> {
    return await this.staffRepository.getAllStaff();
  }

  /**
   * 
   * @param createStaffDTO 
   */
  async createStaff(createStaffDTO: CreateStaffDTO): Promise<Staff> {
    return this.staffRepository.createStaff(createStaffDTO);
  }

  /**
   * 
   * @param dni 
   */
  async deleteStaff(dni: string): Promise<void> {
    const result = await this.getStaffByDniRaw(dni);

    // There is already a guarantee that the entity exists in the database
    if (result) {
      await this.staffRepository.delete(dni);
    }
  }

  // TODO:  Definir el DTO de modificación
  async updateStaff(dni: string, updateStaffDTO: UpdateStaffDTO): Promise<Staff> {
    const staff = await this.getStaffByDniRaw(dni);
    return staff;
  }


}
