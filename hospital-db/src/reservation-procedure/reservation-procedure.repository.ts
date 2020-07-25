import { ReservationProcedures } from "./reservation-procedure.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(ReservationProcedures)
export class ReservationProcedureRepository extends Repository<ReservationProcedures>{

}