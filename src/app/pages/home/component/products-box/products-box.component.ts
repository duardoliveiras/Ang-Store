import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrl: './products-box.component.css'
})
export class ProductsBoxComponent {
  @Input() fullWidthMode = false;
}
