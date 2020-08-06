import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { Staff } from './staff.entity';
import { CreateStaffDTO } from './dto/create-staff.dto';
import { UpdateStaffDTO } from './dto/update-staff.dto';

@Controller('staff')
export class StaffController {

  constructor(private staffService: StaffService) {}

  
  @Get('/:dni')
  getStaffByDni(@Param('dni') dni: string): Promise<Staff> {
    return this.staffService.getStaffByDni(dni);
  }

  @Get()
  getAllStaff(): Promise<Staff[]> {
    return this.staffService.getAllStaff();
  }

  @Post()
  createStaff(@Body() createStaffDTO: CreateStaffDTO): Promise<Staff> {
    return this.staffService.createStaff(createStaffDTO);
  }

  @Patch('/:dni/edit')
  editStaff(
    @Param('dni') dni: string,
    @Body() updateStaffDTO: UpdateStaffDTO,
  ): Promise<Staff> {
    return this.staffService.updateStaff(dni, updateStaffDTO);
  }

  @Delete('/:dni')
  deleteStaff(@Param('dni') dni: string): void {
    this.staffService.deleteStaff(dni);
  }
}
