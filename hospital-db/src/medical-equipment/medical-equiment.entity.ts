import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class MedicalEquipment extends BaseEntity {

  /**
   * Asset UUID code.
   */
  @PrimaryColumn({length:36})
  id: string;
  
  /**
   * Equipment name.
   */
  @Column({length:30})
  name: string;
  
  /**
   * Medical equipment provider.
   */
  @Column({length:30})
  provider: string;
  
  /**
   * Quantity of units available.
   */
  @Column()
  qty: number;
}