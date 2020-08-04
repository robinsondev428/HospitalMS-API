import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalProcedure } from './medical-procedure.entity';
import { MedicalProcedureRepository } from './medical-procedure.repository';
import { CreateMedicalProcedureDTO } from './dto/create-procedure.dto';
import { UpdateMedicalProcedureDTO } from './dto/update-procedure.dto';
@Injectable()
export class MedicalProcedureService {
  constructor(
    @InjectRepository(MedicalProcedure)
    private medicalProcedureRepository: MedicalProcedureRepository,
  ) {}
  
  /**
   * Returns a medical procedure given its uuid code.
   */
  async getMedicalProcedureById(id: string): Promise<MedicalProcedure> {
    const procedure = await this.medicalProcedureRepository.findOne(id);
    if (!procedure) {
      const errorMessage = `Procedure with ID ${id} not found`;
      throw new NotFoundException(errorMessage);
    }
    return procedure;
  }

  /**
   * Get a list of all medical procedures.
   */
  async getAllMedicalProcedures(): Promise<MedicalProcedure[]> {
    return await this.medicalProcedureRepository.getAllMedicalProcedures();
  }

  /**
   * Create a new medical procedure.
   * @param createProcedureDTO 
   */
  async createMedicalProcedure(createProcedureDTO: CreateMedicalProcedureDTO): Promise<MedicalProcedure> {
    return await this.medicalProcedureRepository.createMedicalProcedure(createProcedureDTO);
  }

  /**
   * Delete a medical procedure from the database given its uuid code.
   * @param id 
   */
  async deleteMedicalProcedure(id: string): Promise<void> {
    const result = await this.getMedicalProcedureById(id);

    // There is already a guarantee that the entity exists in the database
    if (result) {
      await this.medicalProcedureRepository.delete(id);
    }
  }

  /**
   * Modify the description and duration of a medical procedure.
   * @param id 
   * @param updateProcedureDTO 
   */
  async updateMedicalProcedure(
    id: string, 
    updateProcedureDTO: UpdateMedicalProcedureDTO
  ): Promise<MedicalProcedure> {
    const  {Description, Time}  = updateProcedureDTO;
    const procedure = await this.getMedicalProcedureById(id);

    procedure.description = Description;
    procedure.time = Time;
    await procedure.save();

    return procedure;
  }
}
