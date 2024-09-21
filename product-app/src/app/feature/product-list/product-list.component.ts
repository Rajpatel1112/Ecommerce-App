import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/ProductModel';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: Product[] = [];
  showCart: boolean = false;
  

  constructor(private productService: ProductService, private cartService: CartService,private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  viewDetails(productId: number) {
    this.router.navigate(['/product-list/product-det', productId]);
  }

  addToCart(product: any, quantity: number) {
    this.cartService.addToCart(product, quantity);
    this.showCart = true;
    this.router.navigate(['/product-list/product-cart', product]);
  }

  logout(){
    this.router.navigate(['/login']);
  }
  
}
