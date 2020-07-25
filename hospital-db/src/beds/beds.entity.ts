import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { isBoolean } from 'util';

@Entity()
export class Bed extends BaseEntity {

  /**
   * Bed UUID.
   */
  @PrimaryColumn({length:36})
  BedID: string;

  /**
   * Indicates if it is an ICU bed.
   */
  @Column()
  UCI: boolean;

  /**
   * Room in which the bed is located.
   */
  @Column()
  RoomID: number;
}