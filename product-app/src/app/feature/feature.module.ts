import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart/cart.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HttpClientModule
  
    
  ]
})
export class FeatureModule { }
