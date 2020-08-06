import { Module } from '@nestjs/common';
import { EvaluationModule } from './evaluation/evaluation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    EvaluationModule,
    TypeOrmModule.forRoot(typeOrmConfig),],
  controllers: [],
  providers: [],
})
export class AppModule {}
