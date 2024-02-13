import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'Asc';
  itemsCount = 12;


  columnsUpdate(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }

  sortUpdate(newSort : string): void{
    this.sort = newSort;
    this.sortChange.emit(this.sort);
  }

  itemsUpdate(newCount : number): void{
    this.itemsCount = newCount;
    this.itemsCountChange.emit(this.itemsCount);
  }



}
