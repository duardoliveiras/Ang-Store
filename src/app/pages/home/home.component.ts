import { Component } from '@angular/core';


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

  columnsUpdate(colsNum : number): void {
    console.log('Selected column', colsNum);
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }
  selectCategory(newCat : string): void {
    console.log('Selected category', newCat);
    this.category = newCat;
  }
}
