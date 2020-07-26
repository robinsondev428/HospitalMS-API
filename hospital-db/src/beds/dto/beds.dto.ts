import { IsString, IsNotEmpty, IsBoolean, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BedDTO {
    /**
    * Bed UUID.
    */
    @ApiProperty({
        example: '1',
        description: 'Bed UUID.'
    })
    @IsNotEmpty()
    @IsString()
    BedID: string;

    /**
     * Indicates if it is an ICU bed.
     */
    @ApiProperty({
        example: true,
        description: 'Indicates if it is an ICU bed'
    })
    @IsNotEmpty()
    @IsBoolean()
    UCI: boolean;

    /**
     * Room in which the bed is located.
     */
    @ApiProperty({
        example: '1',
        description: 'Room in which the bed is located.'
    })
    @IsNotEmpty()
    @IsNumber()
    RoomID: number;
}