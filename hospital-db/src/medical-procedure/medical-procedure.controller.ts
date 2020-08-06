import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { MedicalProcedureService } from './medical-procedure.service';
import { MedicalProcedure } from './medical-procedure.entity';
import { CreateMedicalProcedureDTO } from './dto/create-procedure.dto';
import { UpdateMedicalProcedureDTO } from './dto/update-procedure.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('medical-procedure')
export class MedicalProcedureController {
  /**
   * first method
   * @param procedureService procedure service controller
   */
  constructor(private procedureService: MedicalProcedureService) {}
  /**
   * get one medical procedure by id
   * @param id of the medical procedure
   */
  @ApiOperation({ summary: 'Get the summary of a medical procedure given its id.' })
  @ApiResponse({ status: 200, type: MedicalProcedure })
  @Get('/:id')
  getMedicalProcedureById(@Param('id') id: string): Promise<MedicalProcedure> {
    return this.procedureService.getMedicalProcedureById(id);
  }
  /**
   * Get all the medical procedure
   */
  @ApiOperation({ summary: 'Get the list of all medical procedures.' })
  @ApiResponse({ status: 200, type: [MedicalProcedure] })
  @Get()
  getAllMedicalProcedures(): Promise<MedicalProcedure[]> {
    return this.procedureService.getAllMedicalProcedures();
  }
  /**
   * Create a new medical procedure
   * @param createProcedureDTO data of the procedure
   */
  @ApiOperation({ summary: 'Enter a new medical procedure into the database.' })
  @ApiResponse({ status: 201, type: MedicalProcedure })
  @Post()
  createMedicalProcedure(@Body()  createProcedureDTO: CreateMedicalProcedureDTO): Promise<MedicalProcedure> {
    return this.procedureService.createMedicalProcedure(createProcedureDTO);
  }
  /**
   * Update a procedure data
   * @param id of the procedure
   * @param updateProcedureDTO information of the procedure
   */
  @ApiOperation({ summary: 'Modify the description or duration of a medical procedure.' })
  @ApiResponse({ status: 200, type: MedicalProcedure })
  @Patch('/:id/edit')
  updateMedicalProcedure(
    @Param('id') id: string,
    @Body() updateProcedureDTO: UpdateMedicalProcedureDTO,
  ): Promise<MedicalProcedure> {
    return this.procedureService.updateMedicalProcedure(id,updateProcedureDTO);
  }
  /**
   * delete a medical procedure
   * @param id of the procedure
   */
  @ApiOperation({ summary: 'Delete a medical procedure from the database.' })
  @ApiResponse({ status: 204 })
  @Delete('/:id')
  deleteMedicalProcedure(@Param('id') id: string): void {
    this.procedureService.deleteMedicalProcedure(id);
  }
}
