import { IsNotEmpty, IsString, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ClinicalRecordsDTO {
    /**
    * Registration code.
    */
    @ApiProperty({
        example: '1',
        description: 'Registration code.'
    })
    @IsNotEmpty()
    @IsString()
    RecordID: string;

    /**
     * Date the registration is made.
     */
    @ApiProperty({
        example: '12/11/2020',
        description: 'Date the registration is made.'
    })
    @IsNotEmpty()
    @IsDate()
    Date: Date;

    /**
     * Procedure performed on the patient.
     */
    @ApiProperty({
        example: '1',
        description: 'Procedure performed on the patient.'
    })
    @IsNotEmpty()
    @IsString()
    ProcedureID: string;

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
}