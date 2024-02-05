import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

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
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSrc = _cart.items;
    });
  }

  displayedColumns: Array<string> = [
    'id',
    'product',
    'name',
    'price',
    'qty',
    'total',
    'action'
  ];

  constructor(private cartService: CartService) { }

  getTotal(items : Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
  clearCart() : void {
    this.cartService.clearCart();
  }
  removeItem(item : CartItem) : void {
    this.cartService.removeItem(item);
  }
  subQuantity(item : CartItem) : void {
    this.cartService.subQuantity(item);
  }
  addQuantity(item : CartItem) : void { 
    this.cartService.addToCart(item);
  }

}
