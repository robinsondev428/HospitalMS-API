import { Module, HttpModule } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientRepository } from './patient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientRepository]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule {}
