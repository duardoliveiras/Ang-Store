import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart: Cart = {items: [
    {
      id: 1,
      product: 'https://via.placeholder.com/150',
      name: 'T-Shirt',
      price: 150,
      qty: 1,
      total: 150
    },
    {
      id: 2,
      product: 'https://via.placeholder.com/150',
      name: 'Jeans',
      price: 45,
      qty: 3,
      total: 45
    },
    {
      id: 3,
      product: 'https://via.placeholder.com/150',
      name: 'Hat',
      price: 30,
      qty: 1,
      total: 45
    }
  ]};
  dataSrc: Array<CartItem> = [];

  ngOnInit(): void {
    this.dataSrc = this.cart.items;
  }

  displayedColumns: Array<string> = [
    'id',
    'product',
    'name',
    'price',
    'qty',
    'total',
    'action'
  ]

  getTotal(items : Array<CartItem>): number{
    return items.
    map((item) => item.price * item.qty)
    .reduce((prev,current) => prev+current, 0);
  }

  

}
