import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; 
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.calculateTotalPrice(); }

    reduceQuantity(item: CartItem) {
      if (item.quantity > 1) {
        item.quantity--;
        this.calculateTotalPrice(); 
      } else {
        this.cartService.removeItem(item); 
        this.cartItems = this.cartService.getItems(); 
        this.calculateTotalPrice(); 
      }}

      
  calculateTotalPrice() {

    this.totalPrice = this.cartItems.reduce((sum, item) => 
      sum + item.product.price * item.quantity, 0);}

}
