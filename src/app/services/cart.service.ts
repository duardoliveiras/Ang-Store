import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Automaticaly notify the observer about changes
  cart = new BehaviorSubject<Cart>({items: []});
  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem):void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);

    if(itemInCart){
      itemInCart.qty += 1;
    }else{
      items.push(item);
    }

    this.cart.next({items: items});
    this._snackBar.open('1 Item Added', 'Ok', {duration: 4000} );
    console.log(this.cart.value);
  }
}
