import {User} from "../model/user.entity"

export interface IUser
{
    getAllUsers: () => Promise<any>;
    getUser: (id: string) => Promise<any>;
    postUser: (User: User) => Promise<any>;
    putUser: (User: User) => Promise<any>;
    deleteUser: (id: number) => Promise<any>;
}


