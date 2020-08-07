import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEnum, IsDate, IsDateString, IsISO8601 } from "class-validator";
import { ISexType } from "./type-sex.enum";
import { Address } from "src/address/address.entity";
import { Pathology } from "src/pathology/pathology.entity";

export class PatientDTO {

    dni: string;

    name: string;

    lastname: string;

    age: number;

    phone: string;

    province: string;

    canton: string;

    district: string;

    other_signs: string;

    sex:ISexType;
}