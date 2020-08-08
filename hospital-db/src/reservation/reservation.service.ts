/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationDTO } from './dto/reservation.dto';
import { CheckDTO } from './dto/check.dto';
import { MedicalProcedure } from '../medical-procedure/medical-procedure.entity';
import * as moment from 'moment';

@Injectable()
export class ReservationService {
    
    constructor(
        @InjectRepository(ReservationRepository)
        private reservationRepository: ReservationRepository,
        ){}
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
     * 
     */
    async checkAvailabilityOfBeds(data: CheckDTO) {
        console.log(data);
        const {dni, arrival_date, procedures} = data;

        const departure_date = await this.calculateDepartureDate(arrival_date, procedures);
        console.log(departure_date);
        const beds = this.reservationRepository.query(`select * from hsp_get_available_beds('${dni}','${arrival_date}','${departure_date}')`);
        return beds;
    }

    /**
     * 
     * @param arrival_date 
     * @param procedures 
     */
    async calculateDepartureDate(arrival_date: string, procedures: MedicalProcedure[]) {
        
        let totalTime: number;

        totalTime = 0;
        
        procedures.forEach(p => {
            totalTime += p.time; 
        });

        const date:Date = await this.reservationRepository.query(`select * from hfx_calculate_departure_date('${arrival_date}',${totalTime})`);
        
        return moment(date[0].hfx_calculate_departure_date).format('yyyy-MM-d');
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
        const tableProcedure = await this.reservationRepository.query(`select * from get_reservation_procedures('${id}')`)
        console.log('equipment', tableProcedure);
        return tableProcedure;
    }
}
