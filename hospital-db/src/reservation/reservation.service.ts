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
        const finish_date = this.reservationRepository.query(`call hfx_calculate_departure_date(${data.ArrivalDate}, ${data}) `)
        return await this.reservationRepository.createReservation(data, finish_date);
    }
    /**
     * Get all the reservation
     */
    async getAll(){
        return await this.reservationRepository.find();
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
        const {ArrivalDate, BedID, PatientDni} = data;
        const found = await this.reservationRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`La reservation con el id ${id} no existe`);
        }
        found.arrival_date = ArrivalDate;
        found.bed_ = BedID;
        found.patient_ = PatientDni;
        return await found.save();
    }
}
