import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {

  sort = 'Asc';
  itemsCount = 12;

  sortUpdate(newSort: string): void{
    this.sort = newSort;
  }

  itemsUpdate(newCount: number): void{
    this.itemsCount = newCount;
  }

}
