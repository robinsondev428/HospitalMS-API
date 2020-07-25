import { Repository, EntityRepository } from "typeorm";
import { Bed } from "./beds.entity";

@EntityRepository(Bed)
export class BedsRepository extends Repository<Bed>{

}