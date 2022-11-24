import {myDataSource} from '../appDataSource'
import { Order } from '../model/order.entity'
import { IOrder } from '../interface/Iorder'


const repository = myDataSource.getRepository("Order");
export class OrderService implements IOrder
{
     async  getAllOrders()
    {
        return repository.find()
    }
    async getOrder(id: number)
    {
        return repository.findOneBy({id:id})
    }
     async postOrder(Order: Order)
    {
        return repository.save(Order)
    }
     async putOrder(Order:Order)
    {
        return repository.save(Order)
    }
    async deleteOrder(id: number)
    {
        return repository.delete({id:id})
    }
}
