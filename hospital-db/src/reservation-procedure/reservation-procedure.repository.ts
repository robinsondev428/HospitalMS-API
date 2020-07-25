import { ReservationProcedure } from "./reservation-procedure.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(ReservationProcedure)
export class ReservationRepository extends Repository<ReservationProcedure>{

}