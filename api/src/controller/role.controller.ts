import { Request, Response } from "express";
import log from "../logger";
import { Role } from "../model/role.entity";
import { RoleService } from '../service/role.service';

const service = new RoleService();
export class RoleController
{

    async getAllRoles(req: Request,res: Response) {
        try{
            return res.send(await service.getAllRoles());
        }
        catch(e){log.info(e)}
    }
    async getRole(req: Request,res: Response) {
        try{
            return res.send(await service.getRole(Number.parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
    async postRole(req: Request,res: Response) {
        try{
            console.log(req.body)
            return res.send(await service.postRole(req.body as Role));
        }
        catch(e){console.log(e)}
    }
    async putRole(req: Request,res: Response) {
        try{
            return res.send(await service.putRole(req.body));
        }
        catch(e){console.log(e)}
    }
    async deleteRole(req: Request,res: Response) {
        try{
            return res.send(await service.deleteRole(parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
}