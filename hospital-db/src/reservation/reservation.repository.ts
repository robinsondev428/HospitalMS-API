/* eslint-disable @typescript-eslint/camelcase */
import { Repository, EntityRepository, Connection } from "typeorm";
import { Reservation } from "./reservation.entity";
import { ReservationDTO } from "./dto/reservation.dto";
import { MedicalProcedure } from 'src/medical-procedure/medical-procedure.entity';
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

    async deleteProcedures(procedures: MedicalProcedure[], id: string){

        procedures.forEach( async prod => {
            const result = await this.query(`call delete_procedures(${id},${prod.id})`);
            console.log(result);
        });
    }
}

/**



 */