import { Repository, BaseEntity, Entity, PrimaryColumn, OneToMany, ManyToOne } from "typeorm";
import { type } from "os";
import { Bed } from "src/beds/beds.entity";
import { MedicalEquipment } from "src/medical-equipment/medical-equiment.entity";
@Entity()
export class EquipmentBed extends BaseEntity{
    @PrimaryColumn()
    @ManyToOne(
        type => Bed,
        bed => bed.BedID,
        { eager: false}
    )
    BedID: number;
    @PrimaryColumn()
    @OneToMany(
        type => MedicalEquipment,
        equipment => equipment.Id,
        {eager: false}
    )
    EquipmentID:number;
}