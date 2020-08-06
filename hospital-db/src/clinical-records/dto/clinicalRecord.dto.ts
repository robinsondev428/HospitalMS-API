/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClinicalRecordDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  procedure: string;

  @IsNotEmpty()
  @IsString()
  procedure_id: string;

  @IsNotEmpty()
  @IsString()
  treatment: string;
}
