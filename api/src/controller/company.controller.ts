import { Request, Response } from "express";
import log from "../logger";
import { Company } from "../model/company.entity";
import { CompanyService } from '../service/company.service';

const service = new CompanyService();
export class CompanyController
{

    async getAllCompanys(req: Request,res: Response) {
        try{
            return res.send(await service.getAllCompanys());
        }
        catch(e){log.info(e)}
    }
    async getCompany(req: Request,res: Response) {
        try{
            return res.send(await service.getCompany(Number.parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
    async postCompany(req: Request,res: Response) {
        try{
            console.log(req.body)
            return res.send(await service.postCompany(req.body as Company));
        }
        catch(e){console.log(e)}
    }
    async putCompany(req: Request,res: Response) {
        try{
            return res.send(await service.putCompany(req.body));
        }
        catch(e){console.log(e)}
    }
    async deleteCompany(req: Request,res: Response) {
        try{
            return res.send(await service.deleteCompany(parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
}