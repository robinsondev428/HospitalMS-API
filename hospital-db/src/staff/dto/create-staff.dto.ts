import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEnum } from "class-validator";
import { IRoleType } from "./type-role.enum";

export class CreateStaffDTO {
  /**
   * Employee ID.
   */
  @ApiProperty({
    example: '1-2756-1926',
    description: 'Employee DNI.',
  })
  @IsNotEmpty()
  @IsString()
  dni: string;

  /**
   * Employee username.
   */
  @ApiProperty({
    example: 'carlos.perez',
    description: 'Employee username.',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  /**
   * Employee password.
   */
  @ApiProperty({
    example: 'X-{//_78?wV',
    description: 'Employee password.',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  /**
   * Name of the employee.
   */
  @ApiProperty({
    example: 'Carlos Luis',
    description: 'Name of the employee.',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * Employee's last name.
   */
  @ApiProperty({
    example: 'Perez Ramos',
    description: 'Employees last name.',
  })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  /**
   * Date of birth.
   */
  @ApiProperty({
    example: '1985-10-2',
    description: 'Date of birth.',
  })
  @IsNotEmpty()
  @IsDate()
  dob: Date;

  /**
   * Phone number.
   */
  @ApiProperty({
    example: '8861-1235',
    description: ' Phone number.',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  /**
   * The address of an employee is made up of 
   * province, canton, district and other signs.
   */
  @ApiProperty({
    example: 'Cartago',
    description: 'Province',
  })
  @IsNotEmpty()
  @IsString()
  province: string;
  
  @ApiProperty({
    example: 'Tucurrique',
    description: 'Canton',
  })
  @IsNotEmpty()
  @IsString()
  canton: string;
  
  @ApiProperty({
    example: 'Jimenez',
    description: 'District',
  })
  @IsNotEmpty()
  @IsString()
  district: string;

  @ApiProperty({
    example: 'Casa azul de portón negro',
    description: 'Detailed address.',
  })
  @IsNotEmpty()
  @IsString()
  otherSigns: string;

  /**
   * Date of admission as a hospital worker.
   */
  @ApiProperty({
    example: 'Teltron',
    description: 'Date of admission as a hospital worker.',
  })
  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  /**
   * Role of the employee in the hospital.
   */
  @ApiProperty({
    example: IRoleType.ADMIN,
    description: 'Role of the employee in the hospital.',
  })
  @IsNotEmpty()
  @IsEnum(IRoleType)
  role: IRoleType;
}
