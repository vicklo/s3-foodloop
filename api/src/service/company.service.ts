import {myDataSource} from '../appDataSource'
import { Company } from '../model/company.entity'
import { ICompany } from '../interface/Icompany'


const repository = myDataSource.getRepository("Company");
export class CompanyService implements ICompany
{
     async  getAllCompanys()
    {
        return repository.find()
    }
    async getCompany(id: number)
    {
        return repository.findOneBy({id:id})
    }
     async postCompany(Company: Company)
    {
        return repository.save(Company)
    }
     async putCompany(Company:Company)
    {
        return repository.save(Company)
    }
    async deleteCompany(id: number)
    {
        return repository.delete({id:id})
    }
}
