import { Repository, EntityRepository, Connection } from 'typeorm';
import { Pathology } from './pathology.entity';
import { PathologyDTO } from './dto/pathologyDTO';
import { Patient } from 'src/patient/patient.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Pathology)
export class PathologyRepository extends Repository<Pathology>{
    
    constructor(private connection: Connection) {
        super();
    }

    /**
     * Assign a list of pathologies to a patient.
     */
    async assingPathologies(dni: string, pathologies: PathologyDTO[]): Promise<PathologyDTO[]> {
        const patient = await this.connection.getRepository(Patient).findOne(dni);
        if(!patient) {
            const errorMessage = `patient with DNI: ${dni} not found`;
            throw new NotFoundException(errorMessage);
        }

        const pathologyArray: Pathology[]  = [];

        pathologies.forEach( async p => {
            const pathology = new Pathology();
            pathology.name = p.name;
            pathology.treatment = p.treatment;
            pathology.patient = patient;

            pathologyArray.push(pathology);
        });

        await this.createQueryBuilder().insert().into(Pathology).values(pathologyArray).execute();

        return patient.pathologies;

    }
    
}