import { Module } from '@nestjs/common';
import { PathologyController } from './pathology.controller';
import { PathologyService } from './pathology.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PathologyRepository } from './pathology.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PathologyRepository]),
  ],
  controllers: [PathologyController],
  providers: [PathologyService]
})
export class PathologyModule {}
