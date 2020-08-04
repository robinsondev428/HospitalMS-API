import { Injectable } from '@nestjs/common';
import { EvaluationRepository } from './evaluation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationDTO } from './evaluation.dto';

@Injectable()
export class EvaluationService {

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
}
