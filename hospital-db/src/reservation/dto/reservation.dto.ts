import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Bed } from "src/beds/beds.entity";
import { Patient } from "src/patient/patient.entity";
import { MedicalProcedure } from "src/medical-procedure/medical-procedure.entity";

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
    ArrivalDate: Date;

    /**
     * Patient's medical Procedure List
     */
    @ApiProperty({
        description: 'Reservation procedures list'
    })
    @IsNotEmpty()
    Procedures: MedicalProcedure[];
}