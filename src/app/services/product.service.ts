import { DebugElement, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postProductDto } from '../dto/postproduct.dto';
import { productShop } from '../dto/productShop.dto';
import { AuthenticateService } from './authenticate.service';
import { ShoppingCartService } from './shopping-cart.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public token: any = "";
  private shoppingCartList: Array<productShop> = new Array<productShop>();
  public productsLoading = true;
  private _productList = new BehaviorSubject<Array<productShop>>([]);
  public productList$ = this._productList.asObservable();
  get productList() {return this._productList.value}

  constructor(private authService: AuthService, private authenticateService: AuthenticateService, private shoppingCartService: ShoppingCartService) 
  {
    this.startUp()
  }

  private async startUp()
  {
    let list: Array<productShop> = new Array<productShop>;
    await this.getAllProducts().then(x => list = x)
    console.log(list)
    this._productList.next(list)
  }

  private shoppingCartSebscription = this.shoppingCartService.shoppingCartList$.subscribe(
    (shoppingCartList) =>
    {
      this.shoppingCartList = shoppingCartList;
    }
  )

  public async refreshList()
  {
    this._productList.next(await this.getAllProducts())
  }

  public async getAllProducts(): Promise<Array<productShop>>
  { 
    const products:Array<productShop> = new Array<productShop>()
    await axios.get(`${environment.apiBaseUrl}/products`)
      .then(data => 
        {
            data.data.forEach((product: productShop) => {
              let added = false;
              this.shoppingCartList.forEach(cartProduct =>
                {
                  if(cartProduct.id == product.id)
                  {
                    products.push(cartProduct);
                    added = true;
                  }
                })
              if(!added)
              {
                product.amountIncart = 0;
                product.price = Math.floor(Math.random() * 100)
                products.push(product);
              }
            });
            this.productsLoading = false;
        })
    return products
  }

  public async PostProduct(product: postProductDto): Promise<any>
  {
    let response;
    await axios.post(`${environment.apiBaseUrl}/product`,product,)
      .then(data => response = data)
    return response;
  }

  public async DeleteProduct(productId: number): Promise<any>
  {
    let response;
    await axios.delete(`${environment.apiBaseUrl}/product/${productId}`)
      .then(data => response = data)
    return response;
  }
}
