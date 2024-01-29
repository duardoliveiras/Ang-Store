import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product-box';


const ROW_HEIGHT : {[id:number]: number}  = {1: 400, 3: 325, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 1;
  category: string | undefined;
  rowHeight = ROW_HEIGHT[this.cols];

  constructor(private cartService: CartService){}

  columnsUpdate(colsNum : number): void {
    console.log('Selected column', colsNum);
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }
  selectCategory(newCat : string): void {
    console.log('Selected category', newCat);
    this.category = newCat;
  }
  onAddToCart(product : Product) : void {
    this.cartService.addToCart({
      id: product.id,
      product: product.image,
      price: product.price,
      name: product.title,
      qty: 1,
      total: product.price
    });
  }
}
