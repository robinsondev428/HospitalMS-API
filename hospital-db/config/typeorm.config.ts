import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { BedsRepository } from "src/beds/beds.repository";

/**
 * Configuration of the postgres connection
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'tec-hospital-2020.postgres.database.azure.com',
    port: 5432,
    username: 'admin1DB@tec-hospital-2020',
    password: 'Mzs;[.8>,MN@',
    database: 'hospitalDB',
    entities: [BedsRepository],
    synchronize: true,
    ssl: true
};