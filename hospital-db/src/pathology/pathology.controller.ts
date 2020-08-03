import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam, ApiNotFoundResponse } from '@nestjs/swagger';
import { PathologyService } from './pathology.service';
import { PathologyDTO } from './dto/pathologyDTO';

@Controller('pathology')
@ApiTags('Pathology')
export class PathologyController {
    constructor(private pathologyService: PathologyService){}
    /**
     * Get all the pathology
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la información de las patologías' })
    @ApiResponse({ status: 200, type: [PathologyDTO] })
    getPatients(){
        return this.pathologyService.getAllPathologies();
    }
    /**
     *  Get one pathology by name
     * @param namePath name of the pathology
     */
    @Get(':name')
    @ApiParam({name: 'name'})
    @ApiOperation({ summary: 'Obtener la información de las patologías' })
    @ApiResponse({ status: 200, type: [PathologyDTO] })
    getPatientByName(@Param('name') namePath: string){
        return this.pathologyService.getOnePathologyByName(namePath);
    }
    /**
     * Get pathology by id of the patient
     * @param idPat id of the patient
     */
    @Get(':idPatient')
    @ApiParam({name: 'idPatient'})
    @ApiOperation({ summary: 'Obtener la información de las patologías' })
    @ApiResponse({ status: 200, type: [PathologyDTO] })
    getPatientByPatient(@Param('idPatient')idPat: string){
        return this.pathologyService.getPathologyByPatient(idPat);
    }
}
