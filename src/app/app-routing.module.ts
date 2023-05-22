import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './page/shop/shop.component';
import { ShopDetailsComponent } from './page/shop-details/shop-details.component';

const routes: Routes = [
  {
  "path": "",
  component: HomeComponent
 },
 {
  "path": "shop",
  component: ShopComponent
 },
 {
  "path": "shop-details",
  component: ShopDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
