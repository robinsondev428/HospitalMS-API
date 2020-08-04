import { TypeOrmModuleOptions } from '@nestjs/typeorm';
/**
 * File with the configuration to the database
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database:  'evaluation',
    entities: [
        'dist/**/*.entity.js',
        './**/*.entity.js'],
    synchronize: true,
    useUnifiedTopology: true 
}