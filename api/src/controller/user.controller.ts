import { Request, Response } from "express";
import log from "../logger";
import { User } from "../model/user.entity";
import { UserService } from '../service/user.service';

const service = new UserService();
export class UserController
{

    async getAllUsers(req: Request,res: Response) {
        try{
            return res.send(await service.getAllUsers());
        }
        catch(e){log.info(e)}
    }
    async getUser(req: Request,res: Response) {
        try{
            return res.send(await service.getUser(req.params.id));
        }
        catch(e){console.log(e)}
    }
    async postUser(req: Request,res: Response) {
        try{
            console.log(req.body)
            return res.send(await service.postUser(req.body as User));
        }
        catch(e){console.log(e)}
    }
    async putUser(req: Request,res: Response) {
        try{
            return res.send(await service.putUser(req.body));
        }
        catch(e){console.log(e)}
    }
    async deleteUser(req: Request,res: Response) {
        try{
            return res.send(await service.deleteUser(parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
}