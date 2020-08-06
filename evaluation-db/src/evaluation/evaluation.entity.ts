import { BaseEntity, Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class EvaluationEntity extends BaseEntity{
    /**
     * id of the evaluation
     */
    @ObjectIdColumn()
    id:string;
    /**
     * Evaluation for the cleanses in the hospital
     */
    @Column()
    clean_hospital: number;
    /**
     * Evaluation for the personal in the hospital
     */
    @Column()
    personal_relation: number;
    /**
     * Evaluation for the punctuality of the appointments
     */
    @Column()
    punctuality: number;
}