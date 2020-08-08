/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param, Post, Body, Patch, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDTO } from './dto/reservation.dto';
import { Reservation } from './reservation.entity';
import { ApiParam } from '@nestjs/swagger';

@Controller('reservation')
export class ReservationController {
    constructor( private reservationService: ReservationService){}
  /**
   * Get all the reservations
   */
  @Get()
  getAllReservation(): Promise<any[]> {
    return this.reservationService.getAll();
  }
    /**
   * Get One the reservations
   */
  @Get('/:id')
  getOneReservation(@Param('id') dni): Promise<any[]> {
    return this.reservationService.getOneReservationByPatient(dni);
  }
   /**
   * Get the procedure of the reservation
   */
  @Get('procedures/:id')
  getProcedureByPatient(@Param('id') dni): Promise<any[]> {
    return this.reservationService.getProcedureByReservation(dni);
  }
  /**
   * Create a new reservation
   * @param createStaffDTO data of the reservation
   */
  @Post()
  @UsePipes(ValidationPipe)
  createReservation(@Body() data: ReservationDTO): Promise<Reservation> {
    return this.reservationService.createReservation(data);
  }
  /**
   * Update the data of the reservation
   * @param dni of the reservation
   * @param updateStaffDTO data of the reservation
   */
  @Patch('/:id')
  editStaff(@Param('id') dni: string,@Body() updateStaffDTO: object,
  ): Promise<Reservation> {
    return this.reservationService.updateReservation(updateStaffDTO,dni)
  }
  /**
   * Delete a reservation 
   * @param dni of the reservation
   */
  @Delete('/:id')
  deleteStaff(@Param('id') dni: string): void {
    this.reservationService.deleteReservation(dni);
  }
}
