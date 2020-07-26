import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class medicalProcedureDTO {
    /**
     * Id of the procedure
      */
    @ApiProperty({
        example: '1',
        description: ' Id of the procedure'
    })
    @IsNotEmpty()
    @IsString()
    Id: string;
    /**
     * Name of the procedure
     */
    @ApiProperty({
        example: '1',
        description: 'Name of the procedure'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;
    /**
     * Description of the procedure
     */
    @ApiProperty({
        example: 'Broken arm',
        description: 'Description of the procedure'
    })
    @IsNotEmpty()
    @IsString()
    Description: string;
    /**
     * Time spent in the procedure in minute
     */
    @ApiProperty({
        example: 100,
        description: 'Time spent in the procedure in minute'
    })
    @IsNotEmpty()
    @IsNumber()
    Time: number;
}