import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Company } from "./company.entity";

@Entity()
export class Product extends Base
{

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(type => Company)
    company: Company

    @Column({default:1})
    price: number
}