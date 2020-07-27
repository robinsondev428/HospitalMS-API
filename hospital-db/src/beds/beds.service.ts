import { Injectable } from '@nestjs/common';
import { BedsRepository } from './beds.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BedsService {
    constructor(
        @InjectRepository(BedsRepository)
        private bedRepository: BedsRepository
    ){}
}
