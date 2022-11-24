import {Company} from "../model/company.entity"

export interface ICompany
{
    getAllCompanys: () => Promise<any>;
    getCompany: (id: number) => Promise<any>;
    postCompany: (Company: Company) => Promise<any>;
    putCompany: (Company: Company) => Promise<any>;
    deleteCompany: (id: number) => Promise<any>;
}


