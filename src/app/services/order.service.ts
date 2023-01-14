import { Injectable } from '@angular/core';
import axios from 'axios';
import { List } from 'cypress/types/lodash';
import { environment } from 'src/environments/environment';
import { OrderDto } from '../dto/order.dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  async getOrders(companyId: number): Promise<OrderDto[]>
  {
    let orders: OrderDto[] = []
    await axios.get(`${environment.apiBaseUrl}/order/company/${companyId}`)
    .then(Response =>
      {
        orders = Response.data
        orders.forEach(x=> x.totalPrice = 0)
      })
    return orders;
  }

  async postOrder(order: any)
  {
    let response = {}
    await axios.post(`${environment.apiBaseUrl}/order`,order)
    .then(data => response = data)
    .catch(error => {
      return Promise.reject(error)
    })
    return response;
  }
}
