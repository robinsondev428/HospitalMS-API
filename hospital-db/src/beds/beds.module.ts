import { Module } from '@nestjs/common';
import { BedsController } from './beds.controller';
import { BedsService } from './beds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BedsRepository } from './beds.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BedsRepository])
  ],
  controllers: [BedsController],
  providers: [BedsService]
})
export class BedsModule { }
