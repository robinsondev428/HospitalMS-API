import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PathologyDTO {
    /**
    * Patient's Dni.
    */
    @ApiProperty({
        example: '1',
        description: 'Patients Dni.'
    })
    @IsNotEmpty()
    @IsString()
    PatientDni: string;

    /**
     * Pathology name.
     */
    @ApiProperty({
        example: 'Dengue',
        description: 'Pathology name.'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;

    /**
     * Pathology treatment.
     */
    @ApiProperty({
        example: 'Aspirin',
        description: 'Pathology treatment.'
    })
    @IsNotEmpty()
    @IsString()
    Description: string;
}