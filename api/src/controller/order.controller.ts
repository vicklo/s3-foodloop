import { Request, Response } from "express";
import log from "../logger";
import { Order } from "../model/order.entity";
import { OrderService } from '../service/order.service';

const service = new OrderService();
export class OrderController
{

    async getAllOrders(req: Request,res: Response) {
        try{
            return res.send(await service.getAllOrders());
        }
        catch(e){log.info(e)}
    }
    async getOrder(req: Request,res: Response) {
        try{
            return res.send(await service.getOrder(Number.parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
    async postOrder(req: Request,res: Response) {
        try{
            console.log(req.body)
            return res.send(await service.postOrder(req.body as Order));
        }
        catch(e){console.log(e)}
    }
    async putOrder(req: Request,res: Response) {
        try{
            return res.send(await service.putOrder(req.body));
        }
        catch(e){console.log(e)}
    }
    async deleteOrder(req: Request,res: Response) {
        try{
            return res.send(await service.deleteOrder(parseInt(req.params.id)));
        }
        catch(e){console.log(e)}
    }
}