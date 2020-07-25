import { Module } from '@nestjs/common';
import { PathologyController } from './pathology.controller';
import { PathologyService } from './pathology.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  controllers: [PathologyController],
  providers: [PathologyService]
})
export class PathologyModule {}
