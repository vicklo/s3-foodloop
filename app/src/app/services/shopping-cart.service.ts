import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productShop } from '../dto/productShop.dto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  private _shoppingCartList = new BehaviorSubject<Array<any>>([]);
  public shoppingCartList$ = this._shoppingCartList.asObservable();
  get shoppingCartList() {return this._shoppingCartList.value}

  public editList(product: productShop)
  {
    const newlist = new Array<productShop>()
    this.shoppingCartList.forEach(productShop =>
    {
      // if ids match the updated product gets pushed
      if(productShop.id == product.id)
      {
        if(product.amountIncart! >0)
        {newlist.push(product)}
      }
      else
      {newlist.push(productShop)}
    })
    //if product isnt in list then then it gets added
    if(this.shoppingCartList.filter(x => x.id == product.id).length == 0)
    {newlist.push(product)}
    this._shoppingCartList.next(newlist)
  }

  public ResetList()
  {
    this._shoppingCartList.next([])
  }
}
