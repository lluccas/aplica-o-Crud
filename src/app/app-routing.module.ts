import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"products",
  component: ProductCrudComponent
},{
  path: "products/creat",
  component: ProductCreatComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
