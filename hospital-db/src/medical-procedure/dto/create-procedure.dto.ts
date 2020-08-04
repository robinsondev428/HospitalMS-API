import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateMedicalProcedureDTO {

    /**
     * Name of the procedure
     */
    @ApiProperty({
        example: '1',
        description: 'Name of the procedure'
    })
    @IsNotEmpty()
    name: string;

    /**
     * Description of the procedure
     */
    @ApiProperty({
        example: 'Broken arm',
        description: 'Description of the procedure'
    })
    @IsNotEmpty()
    description: string;
    
    /**
     * Time spent in the procedure in minute
     */
    @ApiProperty({
        example: 100,
        description: 'Time spent in the procedure in minute'
    })
    @IsNotEmpty()
    @IsNumber()
    time: number;
}