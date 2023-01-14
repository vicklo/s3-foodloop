import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { PostProductDto } from '../dto/postproduct.dto';
import { ProductShop } from '../dto/productShop.dto';
import { ShoppingCartService } from './shopping-cart.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public token: any = "";
  private shoppingCartList: ProductShop[] = new Array<ProductShop>();
  public productsLoading = true;
  private _productList = new BehaviorSubject<ProductShop[]>([]);
  public productList$ = this._productList.asObservable();
  get productList() {return this._productList.value}

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService)
  {
    this.startUp()
  }

  private async startUp()
  {
    let list: ProductShop[] = [];
    await this.getAllProducts().then(x => list = x)
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

  public async getAllProducts(): Promise<ProductShop[]>
  {
    const products:ProductShop[] = new Array<ProductShop>()
    await axios.get(`${environment.apiBaseUrl}/products`)
      .then(response =>
        {
            response.data.forEach((product: ProductShop) => {
              let added = false;
              this.shoppingCartList.forEach(cartProduct =>
                {
                  if(cartProduct.id === product.id)
                  {
                    products.push(cartProduct);
                    added = true;
                  }
                })
              if(!added)
              {
                product.amountIncart = 0;
                products.push(product);
              }
            });
            this.productsLoading = false;
        })
        .catch(error =>
          { return new Error(error)})
    return products
  }

  public async PostProduct(product: PostProductDto): Promise<AxiosResponse>
  {
    let response = {}
    if(!product.company)
      return Promise.reject("Company must be filled")
    if(!product.description)
      return Promise.reject('Description must be filled');
    if(!product.name)
      return Promise.reject('Name must be filled');
    if(!product.url)
      return Promise.reject('Url must be filled');
    await axios.post(`${environment.apiBaseUrl}/product`,product)
      .then(data => response = data)
      .catch(error => {
        return Promise.reject(error)
      })
    return response as AxiosResponse;
  }

  public async DeleteProduct(productId: number): Promise<AxiosResponse>
  {
    let response = {};
    await axios.delete(`${environment.apiBaseUrl}/product/${productId}`)
      .then(data => response = data)
      .catch(error => {return Promise.reject(error)})
    return response as AxiosResponse;
  }
}
