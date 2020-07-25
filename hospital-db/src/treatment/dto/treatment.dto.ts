import { IsNotEmpty, IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TreatmentDTO{
    /**
     * Id of the record
     */
    @ApiProperty({
        example: 'id123' ,
        description: ' Id of the record'
    })
    @IsNotEmpty()
    @IsString()
    RecordId: string;
    /**
     * Name of the treatment
     */
    @ApiProperty({
        example: 'enantium' ,
        description: 'Name of the treatment'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;
    /**
     * Description of the treatment
     */
    @ApiProperty({
        example: 'Relax muscule' ,
        description: 'Description of the treatment'
    })
    @IsNotEmpty()
    @IsString()
    Description: string;
}