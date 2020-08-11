/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, HttpService } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiNotFoundResponse } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { PatientDTO } from './dto/patient.dto';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import * as https from 'https';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
    constructor(private patientService: PatientService, private http: HttpService){}
    /**
     * Get all the patients
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la información de los pacientes' })
    @ApiResponse({ status: 200, type: [PatientDTO] })
    getPatients(){
        return this.patientService.getAllPatient();
    }

    @Get('/sync')
    syncCotecAPI() {
        const patients = this.getCotecData();
        
        return { status:'Successful sync'};
    }

    async getCotecData() {
        const axios = require('axios');
        let patients: CreatePatientDTO[];
        await axios.get('https://localhost:5001/api/v1/patients/crc',{
            httpsAgent: new https.Agent({
              rejectUnauthorized: false
            })
        }).then(resp => { patients= resp.data;});
        
        patients.forEach(
            pat => {
                console.log(pat);
            }
        );
        return patients;
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
