import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItemModel';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(product: any, quantity: number) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(item: CartItem) {
    this.items = this.items.filter(cartItem => cartItem.product.id !== item.product.id);}

  getItems() {
    return this.items; }

  clearCart() {
    this.items = [];}
}


export { CartItem };

