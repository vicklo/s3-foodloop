import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { postProductDto } from 'src/app/dto/postproduct.dto';
import { faCircleXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { productShop } from 'src/app/dto/productShop.dto';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public loading: boolean = true;
  public faCircleXmark = faCircleXmark;
  public faPlus = faPlus;
  public faMinus = faMinus;
  private allProducts: Array<productShop> = [];
  public searchWord:string = "";
  public products: Array<productShop> = [];
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    company: new FormControl(1),
    amountIncart: new FormControl(0)
  })

  constructor(private productService: ProductService,private userService: UserService, private modalService: NgbModal, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {}

  private productListSubscription = this.productService.productList$.subscribe(
    (productList) =>
    {
      this.allProducts = productList;
      this.products = this.allProducts
      this.loading = this.productService.productsLoading
     
    }
  )

  async RefreshAllProducts()
  {
    this.loading = true;
    await this.productService.refreshList()
  }

  public open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}


  public SearchBarChange(Text: any)
  {
    this.searchWord = Text.target.value;
    this.searchProducts(this.searchWord)
  }

  public searchProducts(Text: string): void
  {
    this.products = this.allProducts.filter(x => (x.name as string).toLowerCase().includes(Text));
  }

  public async postProduct(): Promise<AxiosResponse>
  {
    try
    {
      const response: AxiosResponse = await this.productService.PostProduct(this.productForm.value as postProductDto)
      if(response.status == 200)
      {
        this.modalService.dismissAll()
        this.allProducts.push(response.data)
        this.searchProducts(this.searchWord)
        this.productForm.reset()
        return response
      }
    }
    catch(error)
    {
      console.log(error)
    }
    return {} as AxiosResponse
  }

  public async deleteProduct(productId: number)
  {
    const response: AxiosResponse = await  this.productService.DeleteProduct(productId)
    if(response.status == 200)
    {
      const newlist = this.allProducts.filter(x => x.id != productId) 
      this.allProducts = newlist
      this.searchProducts(this.searchWord)
    }
  }

  public editCart(product: productShop, newAmount: number)
  {
    product.amountIncart = product.amountIncart as number +  newAmount;
    this.shoppingCartService.editList(product)
  }

  ngOnDestroy() {
    this.productListSubscription.unsubscribe()
  }
}

