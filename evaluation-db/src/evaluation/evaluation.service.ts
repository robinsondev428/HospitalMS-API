import { Injectable } from '@nestjs/common';
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
}
