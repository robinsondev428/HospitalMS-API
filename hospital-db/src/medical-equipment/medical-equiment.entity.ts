import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class MedicalEquipment extends BaseEntity {

  /**
   * Asset UUID code.
   */
  @PrimaryColumn({length:36})
  Id: string;
  
  /**
   * Equipment name.
   */
  @Column({length:30})
  Name: string;
  
  /**
   * Medical equipment provider.
   */
  @Column({length:30})
  Provider: string;
  
  /**
   * Quantity of units available.
   */
  @Column()
  Qty: number;
}