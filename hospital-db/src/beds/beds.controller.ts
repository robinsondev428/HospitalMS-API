import { Controller, Get, Post, UsePipes, ValidationPipe, Patch, Body, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiNotFoundResponse, ApiParam } from '@nestjs/swagger';
import { BedsService } from './beds.service';
import { BedDTO } from './dto/beds.dto';

@ApiTags('beds')
@Controller('beds')
export class BedsController {
    constructor(private bedService: BedsService){}
    /**
     * Get all the Beds
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la informacion de las camas' })
    @ApiResponse({ status: 200, type: [BedDTO] })
    getBeds(){
        return this.bedService.getBeds();
    }
    /**
     * Create a new bed
     * @param data data of the bed
     */
    @Post()
    @ApiBody({ required: true, type: BedDTO })
    @ApiOperation({ summary: 'Permite agregar una nueva cama a la base de datos.' })
    @ApiResponse({ status: 201, type: BedDTO })
    @UsePipes(ValidationPipe)
    createBed(@Body() data: BedDTO){
        return this.createBed(data);
    }
    /**
     * Update the bed attribute
     * @param data data of the bed
     * @param idBed id of the bed
     */
    @Patch('/:id')
    @ApiBody({ required: true, type: BedDTO})
    @ApiParam({name:'id'})
    @ApiOperation({summary: 'Actualiza los campos de una cama enviado a través de la solicitud (merge). Si la cama no existe, retorna error'})
    @ApiResponse({ status: 200, type: BedDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra la cama' })
    updateBed(@Body() data: BedDTO,@Param() idBed: string){
        return this.bedService.updateBed(idBed, data);
    }
}


