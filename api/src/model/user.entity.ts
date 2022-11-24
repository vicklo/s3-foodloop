import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Base } from "./BaseEntity";
import { Company } from "./company.entity";
import { Order } from "./order.entity";
import { Role } from "./role.entity";

@Entity()
export class User extends Base
{

    @Column()
    authId: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @ManyToOne(type => Company)
    company: Company

    @OneToMany(type => Order, o => o.user)
    orders: Order[]

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]

}