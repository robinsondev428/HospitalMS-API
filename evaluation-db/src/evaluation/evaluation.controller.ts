import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EvaluationService } from './evaluation.service';
import { EvaluationDTO } from './evaluation.dto';

@ApiTags('Evaluation')
@Controller('evaluation')
export class EvaluationController {
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
        const result = await this.evaluationService.createEvaluation(data);
        return result;
    }
}
