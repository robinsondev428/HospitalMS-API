import { Repository, EntityRepository } from "typeorm";
import { Treatment } from "./treatment.entity";

@EntityRepository(Treatment)
export class TreatmentRepository extends Repository<Treatment>{

}