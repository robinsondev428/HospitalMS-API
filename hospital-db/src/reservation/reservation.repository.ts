/* eslint-disable @typescript-eslint/camelcase */
import { Repository, EntityRepository } from "typeorm";
import { Reservation } from "./reservation.entity";
import { ReservationDTO } from "./dto/reservation.dto";
@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation>{
    async createReservation(data: ReservationDTO){
        const {ArrivalDate, BedID, PatientDni, Procedures} = data;
        const reservation = new Reservation;
        reservation.arrival_date = ArrivalDate;
        reservation.bed_ = BedID;
        reservation.patient_ = PatientDni;
        reservation.procedures_ = Procedures;
        return await reservation.save();
    }
}

/**



 */