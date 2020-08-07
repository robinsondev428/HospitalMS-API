import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Patch, Param } from '@nestjs/common';
import { MedicalEquipmentService } from './medical-equipment.service';
import { MedicalEquipmentDTO } from './dto/medicalEquimentDTO';
import { ApiOperation, ApiResponse, ApiBody, ApiParam, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { MedicalUpdateEquipmentDTO } from './dto/medicalUpdateDTO';

@Controller('medical-equipment')
@ApiTags('Equipment')
export class MedicalEquipmentController {
    /**
     * First method in the page
     * @param equipmentService controller for the equipment service
     */
    constructor(private equipmentService: MedicalEquipmentService){}
    /**
     * Get all the patients
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la información de los equipos medicos' })
    @ApiResponse({ status: 200, type: [MedicalEquipmentDTO] })
    getPatients(){
        return this.equipmentService.getAllEquipments()
    }
    /**
     * Create a new patient
     * @param data data of the new patient
     */
    @Post()
    @ApiBody({ required: true, type: MedicalEquipmentDTO })
    @ApiOperation({ summary: 'Permite agregar un nuevo equipo medico a la base de datos.' })
    @ApiResponse({ status: 201, type: MedicalEquipmentDTO })
    @UsePipes(ValidationPipe)
    createPatient(@Body() data: MedicalEquipmentDTO){
        this.equipmentService.createEquipment(data);
    }
    /**
     * Update the data of the patient
     * @param PatientDni Dni of the patient
     * @param data of the patient
     */
    @Patch('/:id')
    @ApiBody({ required: true, type: MedicalUpdateEquipmentDTO})
    @ApiParam({name:'id'})
    @ApiOperation({summary: 'Actualiza los campos de un equipo medico enviado a través de la solicitud (merge). Si el equipo medico no existe, retorna error'})
    @ApiResponse({ status: 200, type: MedicalUpdateEquipmentDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra el equipo medico' })
    updatePatient(@Param('id') EquimentDni: string, @Body() data: MedicalUpdateEquipmentDTO){
        return this.equipmentService.updateEquipment(EquimentDni, data);
    }
}
