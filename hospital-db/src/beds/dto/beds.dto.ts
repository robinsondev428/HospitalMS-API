import { IsString, IsNotEmpty, IsBoolean, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Room } from "src/room/room.entity";
import { MedicalEquipment } from "src/medical-equipment/medical-equiment.entity";

export class BedDTO {

    /**
     * Indicates if it is an ICU bed.
     */
    @ApiProperty({
        example: true,
        description: 'Indicates if it is an ICU bed'
    })
    @IsNotEmpty()
    @IsBoolean()
    UCI: boolean;

    /**
     * Room in which the bed is located.
     */
    @ApiProperty({
        example: '1',
        description: 'Room in which the bed is located.'
    })
    @IsNotEmpty()
    RoomID: Room;
    /**
     * Equipment that te bed had.
     */
    @ApiProperty({
        example: '1',
        description: 'Equipment that te bed had'
    })
    EquipmentID: MedicalEquipment[];

}