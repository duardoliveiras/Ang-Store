import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  stripePromise = loadStripe('pk_test_51OjP0cBGVQWFzAE7vEkLI84L6jclRDhW7DK17uicCxUpkCGj5WuwMasBLNBD4gpLqlXAXf299B9Sx5I7W4pZQXjx00V5mcarks'); 
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


  constructor(private cartService: CartService, private httpClient: HttpClient) { }
  

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
  async toCheckout() : Promise<void> {
    const payment = {
      name: 'PS5',
      currency: 'usd',
      amount: 9999,
      quantity: '1'
    }
    
    const stripe = await this.stripePromise;

    this.httpClient
      .post('http://localhost:8080/stripe/payment', payment)
      .subscribe( (data: any) => {
        stripe?.redirectToCheckout({
          sessionId: data.id,
        })
      });
  }

}
