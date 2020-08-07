import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
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
    /**
   * Get one staff by dni
   * @param dni of the staff
   */
  @Get('punctuality/:points')
  @ApiParam({name:'points'})
  getStaffByDni(@Param('points') points: number) {
    return this.evaluationService.getEvaluationByPunctuality(points);
  }
    /**
   * Get one staff by dni
   * @param dni of the staff
   */
  @Get('treatment/:points')
  @ApiParam({name:'points'})
  getByTreatment(@Param('points') points: number) {
    return this.evaluationService.getEvaluationByTreatment(points);
  }
    /**
   * Get one staff by dni
   * @param dni of the staff
   */
  @Get('clean/')
  getByClean() {
    return this.evaluationService.getEvaluationByClean();
  }
    /**
   * Get all the evaluation
   */
  @Get()
  getAll() {
    return this.evaluationService.getAll();
  }
}
