import { IsNotEmpty, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClinicalRecordDTO {
  /**
   * Prescribed medical treatment.
   */
  @ApiProperty({
    example: '10ml de mucosulvan compuestp  cada 8 horas.',
    description: 'Prescribed medical treatment.'
  })
  @IsString()
  treatment: string;

}