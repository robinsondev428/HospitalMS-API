import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EvaluationService } from './evaluation.service';
import { EvaluationDTO } from './evaluation.dto';
/**
 * Controller fro the evaluation
 */
@ApiTags('Evaluation')
@Controller('evaluation')
export class EvaluationController {
    /**
     * Constructor
     * @param evaluationService controller service
     */
    constructor(private readonly evaluationService:EvaluationService){}

    /**
     * Post of a new evaluation
     */
    @Post()
    @ApiBody({required:true, type: EvaluationDTO})
    @ApiOperation({summary:'Permite agregar una nueva evaluación a la base de datos.'})
    @ApiResponse({ status: 201 })
    @UsePipes(ValidationPipe)
    async createPostulant(@Body() data: EvaluationDTO) {
        console.log('holi', data);
        const result = await this.evaluationService.createEvaluation(data);
        return result;
    }
}
