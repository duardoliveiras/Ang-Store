import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  @Output() selectNewCategory = new EventEmitter<string>();
  categories = ['clothes', 'shoes', 'sports'];

  selectCategory(category : string) :void {
    console.log('Selected category', category);
    this.selectNewCategory.emit(category);
  }

}
