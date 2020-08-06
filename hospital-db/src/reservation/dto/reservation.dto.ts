import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Bed } from "src/beds/beds.entity";
import { Patient } from "src/patient/patient.entity";

export class ReservationDTO {

    /**
     * Dni of the patient making the reservation.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Dni of the patient making the reservation.'
    })
    @IsNotEmpty()
    @IsString()
    PatientDni: Patient;

    /**
     * UUID of the bed assigned to the reservation.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'UUID of the bed assigned to the reservation.'
    })
    @IsNotEmpty()
    @IsString()
    BedID: Bed;

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