import { Repository, EntityRepository } from "typeorm";
import { IBed } from "./beds.entity";

@EntityRepository(IBed)
export class BedsRepository extends Repository<IBed>{

}