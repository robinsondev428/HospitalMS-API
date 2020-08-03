import { Injectable, NotFoundException } from '@nestjs/common';
import { PathologyRepository } from './pathology.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PathologyService {
    constructor(
        @InjectRepository(PathologyRepository)
        private pathologyRepository: PathologyRepository
    ){}
    /**
     * Get all the pathologies
     */
    async getAllPathologies(){
        return await this.pathologyRepository.find();
    }
    /**
     * Get one pathology by name
     * @param NameP name of the pathology
     */
    async getOnePathologyByName(NameP: string){
        const found = await this.pathologyRepository.findOne({where: {'Name':NameP }})
        if(!found){
            throw new NotFoundException(`La patología con el nombre ${NameP} no existe`);
        }
        return found;
    }
    /**
     * Get pathology by id of the patient
     * @param patientID id of the patient
     */
    async getPathologyByPatient(patientID: string){
        const found = await this.pathologyRepository.findOne(patientID)
        if(!found){
            throw new NotFoundException(`La patología con el id del paciente ${patientID} no existe`);
        }
        return found;
    }
}
