import { Injectable } from '@nestjs/common';
import { PathologyRepository } from './pathology.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PathologyDTO } from './dto/pathologyDTO';

@Injectable()
export class PathologyService {
  constructor(
    @InjectRepository(PathologyRepository)
    private pathologyRepository: PathologyRepository,
  ) {}

  /**
   * Assign a list of pathologies to a patient.
   * @param dni
   * @param pathologies
   */
  async assignPathologies(
    dni: string,
    pathologies: PathologyDTO[],
  ): Promise<PathologyDTO[]> {
    return await this.pathologyRepository.assingPathologies(dni, pathologies);
  }

  /**
   * Get the list of pathologies of a patient.
   * @param dni 
   */
  async getPatientPathologies(dni: string): Promise<PathologyDTO[]> {
    const pathologies: PathologyDTO[] = await this.pathologyRepository
      .createQueryBuilder('pathology')
      .where(`pathology."patientDni" = :dni`, { dni: dni })
      .getMany();

    return pathologies;
  }
}
