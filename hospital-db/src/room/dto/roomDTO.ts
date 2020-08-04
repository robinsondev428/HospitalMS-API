import { IsNotEmpty, IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { ITypeRoom } from './type-room.enum';
import { ApiProperty } from '@nestjs/swagger';

export class IRoomDTO{
     /**
     * Id for the room
     */
    @ApiProperty({
        example: 1,
        description: 'Id for the room'
    })
    @IsNotEmpty()
    @IsNumber()
    ID: number;
    /**
     * Quantity of beds in the room
     */
    @ApiProperty({
        example: 10,
        description: 'Quantity of beds in the room'
    })
    @IsNotEmpty()
    @IsNumber()
    BedsQty: number;
    /**
     * Number of the floor in the room
     */
    @ApiProperty({
        example: 1,
        description: 'Number of the floor in the room'
    })
    @IsNotEmpty()
    @IsNumber()
    Floor: number;
    /**
     * Name of the room
     */
    @ApiProperty({
        example: 'Omar dengo',
        description: 'Name of the room'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;
    /**
     * Type of the room
     */
    @ApiProperty({
        example: ITypeRoom.children,
        description: 'Type of the room'
    })
    @IsNotEmpty()
    @IsEnum(ITypeRoom)
    Type: ITypeRoom;
}