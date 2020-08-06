import { Injectable } from '@nestjs/common';
import { TreatmentRepository } from './treatment.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TreatmentDTO } from './dto/treatment.dto';

@Injectable()
export class TreatmentService {
    /**
     * First method in the page
     * @param treatmentRepository controller for the repository
     */
    constructor(
        @InjectRepository(TreatmentRepository)
        private treatmentRepository: TreatmentRepository
    ){}
    /**
     * create a new treatment
     * @param data of the treatment
     */
    async createTreatment(data: TreatmentDTO){
        return this.treatmentRepository.createTreatment(data);
    }
    /**
     * Get all the treatment
     */
    async getTreatments(){
        return await this.treatmentRepository.find();
    }
    /**
     * get an treatment by the record id
     * @param id of the clinical record
     */
    async getByid(id: string){
        return await this.treatmentRepository.findOne({where: {clinicalRecord: id}});
    }
    async getByName(nameR: string){
        return await this.treatmentRepository.find({where:{name:nameR}})
    }

}
