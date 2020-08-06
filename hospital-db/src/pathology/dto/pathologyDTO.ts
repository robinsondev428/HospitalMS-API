import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class PathologyDTO {

    /**
     * Pathology name.
     */
    @ApiProperty({
        example: 'Dengue',
        description: 'Pathology name.'
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    /**
     * Pathology treatment.
     */
    @ApiProperty({
        example: 'Aspirin',
        description: 'Pathology treatment.'
    })
    @IsNotEmpty()
    @IsString()
    treatment: string;
}