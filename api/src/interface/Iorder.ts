import {Order} from "../model/order.entity"

export interface IOrder
{
    getAllOrders: () => Promise<any>;
    getOrder: (id: number) => Promise<any>;
    postOrder: (Order: Order) => Promise<any>;
    putOrder: (Order: Order) => Promise<any>;
    deleteOrder: (id: number) => Promise<any>;
}


