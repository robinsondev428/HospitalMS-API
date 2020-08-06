import { Repository, EntityRepository } from "typeorm";
import { Address } from "./address.entity";
/**
 * repository of the db
 */
@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{

}