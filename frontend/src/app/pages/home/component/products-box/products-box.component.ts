import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product-box';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrl: './products-box.component.css'
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
  
  @Input() product : Product | undefined;
  
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
