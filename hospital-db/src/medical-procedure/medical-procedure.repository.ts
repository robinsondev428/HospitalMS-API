import { Repository, EntityRepository } from "typeorm";
import { MedicalProcedure } from './medical-procedure.entity';
import { CreateMedicalProcedureDTO} from './dto/create-procedure.dto';
import { v1 as uuid } from "uuid";

@EntityRepository(MedicalProcedure)
export class MedicalProcedureRepository extends Repository<MedicalProcedure>{

  /**
   * Create a medical procedure and enter it into the database.
   * @param createMedicalProcedure 
   */
  async createMedicalProcedure(
    createMedicalProcedure: CreateMedicalProcedureDTO 
  ): Promise<MedicalProcedure> {
    const { name: Name, description: Description, time: Time} = createMedicalProcedure;

    const procedure = new MedicalProcedure();

    procedure.id = uuid(); // Generate a uuid for the procedure.
    procedure.name = Name;
    procedure.description = Description;
    procedure.time = Time;
    await procedure.save();

    return procedure;
  }

  /**
   * Gets all medical procedures from the database.
   */
  async getAllMedicalProcedures(): Promise<MedicalProcedure[]> {
    const procedures = await this.createQueryBuilder("procedure").getMany();
    return procedures;
  }
}