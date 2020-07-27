import { Controller, Get, Post, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiNotFoundResponse, ApiParam } from '@nestjs/swagger';
import { BedsService } from './beds.service';
import { BedDTO } from './dto/beds.dto';

@ApiTags('beds')
@Controller('beds')
export class BedsController {
    constructor(private bedService: BedsService){}
    @Get()
    @ApiOperation({ summary: 'Obtener la informacion de las camas' })
    @ApiResponse({ status: 200, type: [BedDTO] })
    getBeds(){

    }
    @Post()
    @ApiBody({ required: true, type: BedDTO })
    @ApiOperation({ summary: 'Permite agregar una nueva cama a la base de datos.' })
    @ApiResponse({ status: 201, type: BedDTO })
    @UsePipes(ValidationPipe)
    createBed(){

    }
    @Patch('/:id')
    @ApiBody({ required: true, type: BedDTO})
    @ApiParam({name:'id'})
    @ApiOperation({summary: 'Actualiza los campos de una cama enviado a través de la solicitud (merge). Si la cama no existe, retorna error'})
    @ApiResponse({ status: 200, type: BedDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra la cama' })
    updateBed(){}
}


