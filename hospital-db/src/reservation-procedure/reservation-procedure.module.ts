import { Module } from '@nestjs/common';
import { ReservationProcedureController } from './reservation-procedure.controller';
import { ReservationProcedureService } from './reservation-procedure.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationProcedureRepository } from './reservation-procedure.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservationProcedureRepository]),
  ],
  controllers: [ReservationProcedureController],
  providers: [ReservationProcedureService]
})
export class ReservationProcedureModule {}
