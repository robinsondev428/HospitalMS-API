import { Module } from '@nestjs/common';
import { ReservationProcedureController } from './reservation-procedure.controller';
import { ReservationProcedureService } from './reservation-procedure.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  controllers: [ReservationProcedureController],
  providers: [ReservationProcedureService]
})
export class ReservationProcedureModule {}
