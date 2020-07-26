import { IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class EquimentBedDTO{
    /**
     * Id of the bed
     */
    @ApiProperty({
        example: '1',
        description: 'Id of the bed'
    })
    @IsNotEmpty()
    @IsString()
    BedID: string;
    /**
     * Id of the equipment
     */
    @ApiProperty({
        example: 2,
        description: 'Id of the equipment'
    })
    @IsNotEmpty()
    @IsNumber()
    EquipmentID:number;
}