import { TypeOrmModuleOptions } from '@nestjs/typeorm';
/**
 * File with the configuration to the database
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'evaluation-mongo-2020.mongo.cosmos.azure.com',
    port: 10255,
    username: 'evaluation-mongo-2020',
    password:'QMJUWmzvZM5gZ7b9HTlV3vulIif3fLXv9EdPI1Vo2CBCDZ5op4H5lxScZxMpv06ONgKcAeeWv0gTEZ81B4XnGg==',
    database:  'evaluation',
    entities: [
        'dist/**/*.entity.js',
        './**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true,
    ssl: true
}