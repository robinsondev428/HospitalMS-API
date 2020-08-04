import { Module } from '@nestjs/common';
import { EvaluationController } from './evaluation.controller';
import { EvaluationService } from './evaluation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluationRepository } from './evaluation.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      EvaluationRepository
    ])
  ],
  controllers: [EvaluationController],
  providers: [EvaluationService]
})
export class EvaluationModule {}
