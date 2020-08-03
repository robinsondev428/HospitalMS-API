import { Controller, Get, Post, UsePipes, ValidationPipe, Patch, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiNotFoundResponse } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { BedDTO } from 'src/beds/dto/beds.dto';
import { PatientDTO } from './dto/patient.dto';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
    constructor(private patientService: PatientService){}
    /**
     * Get all the patients
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la información de los pacientes' })
    @ApiResponse({ status: 200, type: [PatientDTO] })
    getPatients(){
        return this.patientService.getAllPatient();
    }
    /**
     * Create a new patient
     * @param data data of the new patient
     */
    @Post()
    @ApiBody({ required: true, type: PatientDTO })
    @ApiOperation({ summary: 'Permite agregar un nuevo paciente a la base de datos.' })
    @ApiResponse({ status: 201, type: PatientDTO })
    @UsePipes(ValidationPipe)
    createPatient(@Body() data: PatientDTO){
        return this.patientService.createPatient(data);
    }
    /**
     * Update the data of the patient
     * @param PatientDni Dni of the patient
     * @param data of the patient
     */
    @Patch('/:dni')
    @ApiBody({ required: true, type: PatientDTO})
    @ApiParam({name:'dni'})
    @ApiOperation({summary: 'Actualiza los campos de una paciente enviado a través de la solicitud (merge). Si la cama no existe, retorna error'})
    @ApiResponse({ status: 200, type: PatientDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra el paciente' })
    updatePatient(@Param('dni') PatientDni: string, @Body() data: PatientDTO){
        return this.patientService.updatePatient(PatientDni, data);
    }
}
