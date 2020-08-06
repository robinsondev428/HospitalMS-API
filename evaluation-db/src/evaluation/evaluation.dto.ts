import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Min, Max, IsNumber } from "class-validator";


export class EvaluationDTO{
    /**
     * Evaluation for the cleanses in the hospital
     */
    @ApiProperty({
        example: 2,
        description: 'Evaluation for the cleanses in the hospital'
    })
    @IsNumber()
    @Min(0)
    @Max(5)
    @IsNotEmpty()
    clean_hospital: number;
    /**
     * Evaluation for the personal in the hospital
     */
    @ApiProperty({
        example: 2,
        description: 'Evaluation for the personal in the hospital'
    })
    @IsNumber()
    @Min(0)
    @Max(5)
    @IsNotEmpty()
    personal_relation: number;
    /**
     * Evaluation for the punctuality of the appointments
     */
    @ApiProperty({
        example: 2,
        description: 'Evaluation for the punctuality of the appointments'
    })
    @IsNumber()
    @Min(0)
    @Max(5)
    @IsNotEmpty()
    punctuality: number;
}