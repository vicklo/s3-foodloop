import { Component } from '@angular/core';
import { List } from 'cypress/types/lodash';
import { OrderDto } from 'src/app/dto/order.dto';
import { UserDto } from 'src/app/dto/user.dto';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public user: UserDto = {}
  public loading: boolean = true;
  private UserSubscription = this.userService.currentUser$.subscribe(
    (user) => {
      if(user.CompanyId)
      {
        this.user = user;
        this.startup(user.CompanyId as number)
      }
    }
  )
  public orders: OrderDto[] = []
  constructor(private orderService: OrderService, private userService: UserService)
  {
  }

  async startup(companyId: number)
  {
    this.orders = await this.orderService.getOrders(companyId)
    this.orders.forEach(x => x.products.forEach(p => x.totalPrice += Number.parseFloat(p.price.toString())))
    this.loading = false;
  }


  ngOnDestroy() {
    this.UserSubscription.unsubscribe()
  }
}
