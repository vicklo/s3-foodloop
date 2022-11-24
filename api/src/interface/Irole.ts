import {Role} from "../model/role.entity"

export interface IRole
{
    getAllRoles: () => Promise<any>;
    getRole: (id: number) => Promise<any>;
    postRole: (Role: Role) => Promise<any>;
    putRole: (Role: Role) => Promise<any>;
    deleteRole: (id: number) => Promise<any>;
}


