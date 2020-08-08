import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEnum } from 'class-validator';
import { ISexType } from './type-sex.enum';
import { Pathology } from '../../pathology/pathology.entity';

export class CreatePatientDTO {

  /**
   * 
   */
  @ApiProperty({
    example: '1-2756-1926',
    description: 'Employee DNI.',
  })
  @IsNotEmpty()
  @IsString()
  dni: string;

  /**
   * 
   */
  @ApiProperty({
    example: 'X-{//_78?wV',
    description: 'Employee password.',
  })
  @IsString()
  password: string;

  /**
   * 
   */
  @ApiProperty({
    example: 'Carlos Luis',
    description: 'Name of the employee.',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * 
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
  other_signs: string;

  /**
   * 
   */
  @IsNotEmpty()
  @IsEnum(ISexType)
  sex:  ISexType;

  pathologies: Pathology[];

}