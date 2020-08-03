import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Delete, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiNotFoundResponse, ApiParam } from '@nestjs/swagger';
import { RoomService } from './room.service';
import { IRoomDTO } from './dto/roomDTO';

@Controller('room')
@ApiTags('Room')
export class RoomController {
    constructor(private roomService: RoomService){}
    /**
     * Get all the tables
     */
    @Get()
    @ApiOperation({ summary: 'Obtener la tabla' })
    @ApiResponse({ status: 200, type: [IRoomDTO] })
    getRooms() {
        return this.roomService.getAllRooms();
    }
    /**
     * Create a new room
     * @param bodyTable Query body
     */
    @Post()
    @ApiBody({ required: true, type: IRoomDTO })
    @ApiOperation({ summary: 'Permite agregar un nuevo salon a la base de datos.' })
    @ApiResponse({ status: 201, type: IRoomDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra el salon' })
    @UsePipes(ValidationPipe)
    async createRoom(@Body() bodyTable: IRoomDTO) {
        return this.roomService.createRoom(bodyTable);
    }
    /**
   * Delete a room
   * @param id id of the room to delete
   */
    @Delete('/:id')
    @ApiParam({name: 'id'})
    @ApiOperation({summary:'Eliminar un salon de la DB'})
    @ApiResponse({ status: 200, type: IRoomDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra el salon' })
    deleteRoom( @Param('id') id: string) {
        this.roomService.deleteRoom(id);

    }
    /**
     * Update an attribute in the room
     * @param objectKey Object key of the room
     * @param body attribute to change in the salon
     */
    @Patch('/:id')
    @ApiBody({ required: true, type: IRoomDTO})
    @ApiParam({name:'id'})
    @ApiOperation({summary: 'Actualiza los campos de un salon enviado a través de la solicitud (merge). Si el salon no existe, retorna error'})
    @ApiResponse({ status: 200, type: IRoomDTO })
    @ApiNotFoundResponse({ description: 'No se encuentra el salon' })
    async updateRoom(@Param('id') id: string, @Body() body: IRoomDTO){
        return this.roomService.updateRoom(body, id);
    }
}
