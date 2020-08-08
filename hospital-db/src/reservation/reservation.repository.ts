/* eslint-disable @typescript-eslint/camelcase */
import { Repository, EntityRepository, Connection } from "typeorm";
import { Reservation } from "./reservation.entity";
import { ReservationDTO } from "./dto/reservation.dto";
@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation>{
    constructor(private connection: Connection) {
        super();
      }
    async createReservation(data: ReservationDTO){
        const {ArrivalDate, BedID, PatientDni, Procedures} = data;
        const reservation = new Reservation;
        reservation.arrival_date = ArrivalDate;
        reservation.bed_ = BedID;
        reservation.patient_ = PatientDni;
        reservation.procedures_ = Procedures;
        console.log('createReservation', reservation);
        return await reservation.save();
    }
    async createProcedure(procedure){
        const procedureReservation = this.connection.getRepository(Reservation);
    }
}

/**



 */