import { Component, Input } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { preserveWhitespacesDefault } from '@angular/compiler';

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
  set cart(cart:Cart){
    this._cart = cart;
    this.itemsQty = cart.items
      .map((item) => item.qty)
      .reduce((prev, current) => prev + current, 0);
  }



}
