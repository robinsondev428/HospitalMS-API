import { Repository, EntityRepository } from "typeorm";
import { EquipmentBed } from "./equipmentBed.entity";

@EntityRepository(EquipmentBed)
export class EquipmentBedRepository extends Repository<EquipmentBed>{

}