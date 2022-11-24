import {myDataSource} from '../appDataSource'
import { Role } from '../model/role.entity'
import { IRole } from '../interface/Irole'


const repository = myDataSource.getRepository("Role");
export class RoleService implements IRole
{
     async  getAllRoles()
    {
        return repository.find()
    }
    async getRole(id: number)
    {
        return repository.findOneBy({id:id})
    }
     async postRole(Role: Role)
    {
        return repository.save(Role)
    }
     async putRole(Role:Role)
    {
        return repository.save(Role)
    }
    async deleteRole(id: number)
    {
        return repository.delete({id:id})
    }
}
