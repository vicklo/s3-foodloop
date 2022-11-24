import {myDataSource} from '../appDataSource'
import { User } from '../model/user.entity'
import { IUser } from '../interface/Iuser'


const repository = myDataSource.getRepository("User");
export class UserService implements IUser
{
     async  getAllUsers()
    {
        return repository.find()
    }
    async getUser(id: string)
    {
        return repository.createQueryBuilder('u').innerJoinAndSelect('u.company','company').andWhere({authId:id}).getOne()
    }
     async postUser(User: User)
    {
        return repository.save(User)
    }
     async putUser(User:User)
    {
        return repository.save(User)
    }
    async deleteUser(id: number)
    {
        return repository.delete({id:id})
    }
}
