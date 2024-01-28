import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cols = 3;
  category: string | undefined;

  columnsUpdate(colsNum : number): void {
    console.log('Selected column', colsNum);
    this.cols = colsNum;
  }
  selectCategory(newCat : string): void {
    console.log('Selected category', newCat);
    this.category = newCat;
  }
}
