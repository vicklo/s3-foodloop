import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Base } from "./BaseEntity";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Order extends Base
{

    @Column()
    status: string

    @Column()
    price: number

    @ManyToOne(type => User)
    user: User

    @Column()
    timeOrdered: Date

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}