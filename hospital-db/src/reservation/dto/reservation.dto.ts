import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ReservationDTO {
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
     * Dni of the patient making the reservation.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Dni of the patient making the reservation.'
    })
    @IsNotEmpty()
    @IsString()
    PatientDni: string;

    /**
     * UUID of the bed assigned to the reservation.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'UUID of the bed assigned to the reservation.'
    })
    @IsNotEmpty()
    @IsString()
    BedID: string;

    /**
     * Patient's admission date.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Patients admission date.'
    })
    @IsNotEmpty()
    @IsDate()
    ArrivalDate: Date;
}