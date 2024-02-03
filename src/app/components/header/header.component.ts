import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private _cart: Cart = { items: [] };
  itemsQty = 0;

  @Input() 
  get cart(): Cart{
    return this._cart;
  }
  // The .map method is used to extract the qty propert
  // from each item in the cart and return a new array of just the qty values.

  // The .reduce method is used to sum all the qty values in the array
  set cart(cart:Cart){
    this._cart = cart;
    this.itemsQty = cart.items
      .map((item) => item.qty)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService) { }
  
  getTotal(items : Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  clearCart(){
    this.cartService.clearCart();
  }


}
