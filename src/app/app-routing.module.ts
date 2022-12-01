import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductsComponent } from './pages/products/products.component';
import { CompanyComponent } from './pages/company/company.component';
import { OrderComponent } from './pages/order/order.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes =
[
  { path: '', component: HomeComponent,title:'Home' },
  { path: 'pricing', component: PricingComponent,title:'Pricing' },
  { path: 'about-us', component: AboutUsComponent,title:'About us' },
  { path: 'products', component:  ProductsComponent,  canActivate: [AuthGuard],data: {Authorized: true},title:'Products' },
  { path: 'company', component:  CompanyComponent,  canActivate: [AuthGuard] ,data: {Authorized: true},title:'Company'},
  { path: 'order', component:  OrderComponent,  canActivate: [AuthGuard],data: {Authorized: true},title:'Order'},
  { path: 'shopping-cart', component:  ShoppingCartComponent,  canActivate: [AuthGuard],data: {Authorized: true}},
  { path: 'register', component:  SignUpComponent,  canActivate: [AuthGuard],data: {Authorized: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
