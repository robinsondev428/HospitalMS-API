import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ReservationProcedureDTO {
    /**
  * Reservation UUID code.
  */
    @ApiProperty({
        example: 'Teltron',
        description: 'Reservation UUID code.'
    })
    @IsNotEmpty()
    @IsString()
    ResID: string;

    /**
     * Procedure UUID code.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Procedure UUID code'
    })
    @IsNotEmpty()
    @IsString()
    ProcedureID: string[];
}