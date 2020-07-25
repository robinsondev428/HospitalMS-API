import { Repository, EntityRepository } from "typeorm";
import { Pathology } from "./pathology.entity";

@EntityRepository(Pathology)
export class PathologyRepository extends Repository<Pathology>{

}