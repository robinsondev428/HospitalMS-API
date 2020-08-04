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
  province: string;

  /**
   * Canton of the address
   */
  @Column({ length: 15 })
  canton: string;

  /**
   * District of the address
   */
  @Column({ length: 15 })
  district: string;
}
