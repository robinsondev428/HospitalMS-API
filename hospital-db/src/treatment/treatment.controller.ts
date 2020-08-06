import { Controller, Get, Param, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { TreatmentDTO } from './dto/treatment.dto';
import { TreatmentService } from './treatment.service';
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('treatment')
export class TreatmentController {
    constructor(private treatmentService: TreatmentService){}
    /**
     * Get all the treatments
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la información de las tratamientos' })
    @ApiResponse({ status: 200, type: [TreatmentDTO] })
    getTreatment(){
        return this.treatmentService.getTreatments();
    }
    /**
     *  Get one treatment by name
     * @param namePath name of the treatment
     */
    @Get(':name')
    @ApiParam({name: 'name'})
    @ApiOperation({ summary: 'Obtener la información de los tratamientos' })
    @ApiResponse({ status: 200, type: [TreatmentDTO] })
    getTreatmentByName(@Param('name') namePath: string){
        return this.treatmentService.getByName(namePath);
    }
    /**
     * Get treatment by id of the clinical record
     * @param idPat id of the clinical record
     */
    @Get(':id')
    @ApiParam({name: 'id'})
    @ApiOperation({ summary: 'Obtener la información de los tratamientos' })
    @ApiResponse({ status: 200, type: [TreatmentDTO] })
    getTreatmentByRecordId(@Param('id')idPat: string){
        return this.treatmentService.getByid(idPat);
    }
    /**
     * Create a new treatment
     * @param data data of the new treatment
     */
    @Post()
    @ApiBody({ required: true, type: TreatmentDTO })
    @ApiOperation({ summary: 'Permite agregar un nuevo tratamiento a la base de datos.' })
    @ApiResponse({ status: 201, type: TreatmentDTO })
    @UsePipes(ValidationPipe)
    createPatient(@Body() data: TreatmentDTO){
        return this.treatmentService.createTreatment(data);
    }
}
