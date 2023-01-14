import { Component } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CompanyDto } from 'src/app/dto/company.dto';
import { OrderDto } from 'src/app/dto/order.dto';
import { ProductShop } from 'src/app/dto/productShop.dto';
import { UserDto } from 'src/app/dto/user.dto';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  public shoppingCart = new Array<ProductShop>();
  public totalPrice: number = 0;
  public faPlus = faPlus;
  public faMinus = faMinus;
  public user: UserDto = {}
  constructor(private shoppingCartService: ShoppingCartService, private userService: UserService, private orderService: OrderService) { }


  private User = this.userService.currentUser$.subscribe(
    (user) => {this.user = user}
  )

  private shoppingListSubscription = this.shoppingCartService.shoppingCartList$.subscribe(
    (list) =>
    {
      this.shoppingCart = list
      this.totalPrice = this.calculateTotalPrice();
    }
  )
  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe()
  }

  private calculateTotalPrice(): number
  {
    let price = 0;
    this.shoppingCart.forEach(p =>
      {
        price += p.amountIncart! * p.price!
      })
      return price
  }

  public editCart(product: ProductShop, newAmount: number)
  {
    product.amountIncart = product.amountIncart as number + newAmount;
    this.shoppingCartService.editList(product)
    this.totalPrice = this.calculateTotalPrice();
  }

  public postOrder()
  {
    const order =
    {
      status:'Ordered',
      price:0,
      user:this.user.userId as number,
      company:this.user.company as CompanyDto,
      timeOrdered:Date.now().toString(),
      products: this.shoppingCart
    }
    this.orderService.postOrder(order)
  }

}
