import { Injectable, NotFoundException } from '@nestjs/common';
import { EvaluationRepository } from './evaluation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationDTO } from './evaluation.dto';
/**
 * Service of the evaluation
 */
@Injectable()
export class EvaluationService {
    /**
     * Constructor
     * @param evaluationRepository repository of the db
     */
    constructor(
        @InjectRepository(EvaluationRepository)
        private evaluationRepository: EvaluationRepository
    ){}
    /**
     * Post of a new evaluation
     */
    createEvaluation(data: EvaluationDTO){
        return this.evaluationRepository.createEvaluation(data);
    }
    /**
     * 
     * @param punt 
     */
    async getEvaluationByPunctuality(punt: number){
        const found = await this.evaluationRepository.find({where: {'punctuality': punt }});
        if(!found){
            throw new NotFoundException(`No existe evaluación con el puntaje ${punt} en puntualidad`);
        }
        return found;
    }
    /**
     * 
     * @param clean 
     */
    async getEvaluationByClean(){
        const found = await this.evaluationRepository.find({});
        if(!found){
            throw new NotFoundException(`No existe evaluación con el puntaje en la nota de aseo`);
        }
        return found;
    }
    /**
     * 
     * @param treatment 
     */
    async getEvaluationByTreatment(treatment: number){
        const found = await this.evaluationRepository.find({where: {personal_relation: treatment}});
        if(!found){
            throw new NotFoundException(`No existe evaluación con el puntaje ${treatment} en la nota de trato por parte del personal`);
        }
        return found;
    }
    /**
     * 
     */
    async getAll(){
        return await this.evaluationRepository.find();
    }
}
