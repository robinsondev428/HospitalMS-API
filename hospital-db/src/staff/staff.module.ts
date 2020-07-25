import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffRepository } from './staff.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([StaffRepository]),
  ],
  controllers: [StaffController],
  providers: [StaffService]
})
export class StaffModule {}
