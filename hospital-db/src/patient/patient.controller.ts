/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiNotFoundResponse } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { PatientDTO } from './dto/patient.dto';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';

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
     * 
     */
    @Post('/login')
    login(
        @Body() credentials: string): Promise<Patient> {
        console.log('login', credentials['dni'],' pass ',credentials['password'])
        return this.patientService.login(credentials['dni'], credentials['password']);
    }

    /**
     * Create a new patient
     * @param createPatientDTO data of the new patient
     */
    @Post()
    @ApiBody({ required: true, type: CreatePatientDTO })
    @ApiOperation({ summary: 'Permite agregar un nuevo paciente a la base de datos.' })
    @ApiResponse({ status: 201, type: PatientDTO })
    @UsePipes(ValidationPipe)
    createPatient(@Body() createPatientDTO: CreatePatientDTO){
        return this.patientService.createPatient(createPatientDTO);
    }
    
    /**
     * Obtains the summary of a patient given their id.
     * @param dni 
     */
    @Get('/:dni')
    getPatientByDni(@Param('dni') dni: string) {
        return this.patientService.getPatientByDni(dni);
    }
}
