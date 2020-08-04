import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEnum, IsDate } from "class-validator";
import { IRoleType } from "./type-role.enum";

export class StaffDTO {
    /**
   * Employee ID.
   */
    @ApiProperty({
        example: 'Teltron',
        description: 'Employee ID.'
    })
    @IsNotEmpty()
    @IsString()
    StaffDni: string;

    /**
     * Employee username.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Employee username.'
    })
    @IsNotEmpty()
    @IsString()
    Username: string;

    /**
     * Employee password.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Employee password.'
    })
    @IsNotEmpty()
    @IsString()
    Password: string;

    /**
     * Name of the employee.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Name of the employee.'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;

    /**
     * Employee's last name.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Employees last name.'
    })
    @IsNotEmpty()
    @IsString()
    LastName: string;

    /**
     * Date of birth.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Date of birth.'
    })
    @IsNotEmpty()
    @IsDate()
    DoB: Date;

    /**
     * Phone number.
     */
    @ApiProperty({
        example: 'Teltron',
        description: ' Phone number.'
    })
    @IsNotEmpty()
    @IsString()
    Phone: string;

    /**
     * Postal Code.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Postal Code.'
    })
    @IsNotEmpty()
    @IsString()
    CP: string;

    /**
     * Detailed address.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Detailed address.'
    })
    @IsNotEmpty()
    @IsString()
    OtherSigns: string;

    /**
     * Date of admission as a hospital worker.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Date of admission as a hospital worker.'
    })
    @IsNotEmpty()
    @IsDate()
    StartDate: Date;

    /**
     * Role of the employee in the hospital.
     */
    @ApiProperty({
        example: IRoleType.ADMIN,
        description: 'Role of the employee in the hospital.'
    })
    @IsNotEmpty()
    @IsEnum(IRoleType)
    Role: IRoleType;
}