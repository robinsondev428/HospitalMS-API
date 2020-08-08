/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationDTO } from './dto/reservation.dto';

@Injectable()
export class ReservationService {
    constructor(
        @InjectRepository(ReservationRepository)
        private reservationRepository: ReservationRepository    ){}
    /**
     * Create a new Reservation
     * @param data of a reservation
     */
    async createReservation(data: ReservationDTO){
        console.log('data reser', data);
        return await this.reservationRepository.createReservation(data);
    }
    /**
     * Get all the reservation
     */
    async getAll(){
        return await this.reservationRepository.find();
    }
    /**
     * Get all the reservation
     */
    async getOneReservationByPatient(patientDni){
        return await this.reservationRepository.query(`select * from reservation where patient_dni='${patientDni}'`);
    }
    /**
     * delete one reservation
     * @param id of the reservation
     */
    async deleteReservation(id: string){
        return await this.reservationRepository.delete(id);
    }
    /**
     * Update the reservation data
     * @param data of the reservation
     * @param id of the reservation
     */
    async updateReservation(data: ReservationDTO, id:string){
        const {ArrivalDate, Procedures, PatientDni,} = data;
        const found = await this.reservationRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`La reservation con el id ${id} no existe`);
        }
        found.arrival_date = ArrivalDate;
        found.procedures_ = Procedures;
        found.patient_ = PatientDni;

        return await found.save();
    }
    /**
     * Get the procedure
     */
    async getProcedureByReservation(id:string){
        console.log('id', id);
        const tableProcedure = await this.reservationRepository.query(`
        SELECT
            r.id,
            m.name
        FROM
            reservation r 
        INNER JOIN reservation_procedures_medical_procedure p 
            ON p.reservation_id = r.id 
        INNER JOIN medical_procedure m 
            ON p.medical_procedure_id = m.id
        WHERE r.id='${id}'`)
        console.log('equipment', tableProcedure);
        return tableProcedure;
    }
}
