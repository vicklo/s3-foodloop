import { Column, Entity } from "typeorm";
import { Base } from "./BaseEntity";

@Entity()
export class Role extends Base
{

    @Column()
    name: string

    @Column()
    roleDiscription: string
}