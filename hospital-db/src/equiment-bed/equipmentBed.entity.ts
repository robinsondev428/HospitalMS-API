import { BaseEntity, Entity, PrimaryColumn, OneToMany, OneToOne } from "typeorm";
import { type } from "os";
import { Bed } from "src/beds/beds.entity";
import { MedicalEquipment } from "src/medical-equipment/medical-equiment.entity";
@Entity()
export class EquipmentBed extends BaseEntity{
    @PrimaryColumn()
    @OneToOne(
        type => Bed,
        bed => bed.BedID,
        { eager: false}
    )
    BedID: string;
    @PrimaryColumn()
    @OneToMany(
        type => MedicalEquipment,
        equipment => equipment.Id,
        {eager: false}
    )
    EquipmentID:number;
}