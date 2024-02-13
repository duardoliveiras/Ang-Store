import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent  implements OnInit, OnDestroy{

  @Output() selectNewCategory = new EventEmitter<string>();
  categories : Array<string> | undefined;
  categoriesSubscription : Subscription | undefined;

  selectCategory(category : string) :void {
    this.selectNewCategory.emit(category);
  }

  constructor(private productService : ProductService){}
  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription?.unsubscribe();
    }
  }

  ngOnInit(): void {
      this.categoriesSubscription = this.productService.getAllCategories()
        .subscribe((response) => {
          this.categories = response;
        });
  }

}
