import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }
  addtoCard(theCardItem: CartItem): void {
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.name === theCardItem.name);
      if (existingCartItem) {
        existingCartItem.quantity++;
        alreadyExistsInCart = true;
      }
    }
    if (!alreadyExistsInCart) {
      this.cartItems.push(theCardItem);
    }
    this.computeCartTotals();
  };
}
