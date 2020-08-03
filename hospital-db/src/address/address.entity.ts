import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Address extends BaseEntity {
  /**
   * Postal code of the address
   */
  @PrimaryColumn({ length: 5 })
  CP: string;

  /**
   * Province of the address
   */
  @Column({ length: 10 })
  Province: string;

  /**
   * Canton of the address
   */
  @Column({ length: 15 })
  Canton: string;

  /**
   * District of the address
   */
  @Column({ length: 15 })
  District: string;
}
