import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, Routes } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routes: Routes = [];
  public faCartShopping = faCartShopping;
  public shoppingList = new Array();

  constructor(public auth: AuthService, private router: Router, private shoppingCartService: ShoppingCartService) 
  {

    
    this.routes = router.config;
  }

  public activeRouter = this.router

  private shoppingListSubscription = this.shoppingCartService.shoppingCartList$.subscribe(
    (list) =>
    {
      this.shoppingList = list
    }
  )

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe()
  }

}
