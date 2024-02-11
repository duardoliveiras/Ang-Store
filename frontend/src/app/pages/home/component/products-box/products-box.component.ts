import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product-box';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrl: './products-box.component.css'
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
  product : Product | undefined = {
    id: 2,
    title: 'Jeans',
    price: 45,
    category: 'Clothes',
    description: 'Description',
    url: 'https://via.placeholder.com/150'
  }
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
