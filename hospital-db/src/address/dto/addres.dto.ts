import { IsNotEmpty, IsString, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AddressDTO {
    /**
     * Postal code of the address
     */
    @ApiProperty({
        example: '30101',
        description: 'Postal code of the address'
    })
    @IsNotEmpty()
    @IsString()
    CP: string;
    /**
     * Province of the address
     */
    @ApiProperty({
        example: 'Cartago',
        description: 'Province of the address'
    })
    @IsNotEmpty()
    @IsString()
    Province: string;
    /**
     * Canton of the address
     */
    @ApiProperty({
        example: 'Jimenez',
        description: 'Canton of the address'
    })
    @IsNotEmpty()
    @IsString()
    Canton: string;
    /**
     * District of the address
     */
    @ApiProperty({
        example: 'Tucurrique',
        description: 'District of the address'
    })
    @IsNotEmpty()
    @IsString()
    District: string;
}