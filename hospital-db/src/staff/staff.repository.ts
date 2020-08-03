import { Repository, EntityRepository } from "typeorm";
import { Staff } from "./staff.entity";
@EntityRepository(Staff)
export class StaffRepository extends Repository<Staff>{
    
}