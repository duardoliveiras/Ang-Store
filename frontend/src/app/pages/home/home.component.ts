import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product-box';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs'; 
// Subscription is important for unsubscribing from the observable when the component is destroyed

const ROW_HEIGHT : {[id:number]: number}  = {1: 400, 3: 325, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit, OnDestroy{
  cols = 1;
  category: string | undefined;
  rowHeight = ROW_HEIGHT[this.cols];

  products: Array<Product> | undefined;
  sort = 'asc';
  limit = '12';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private productService: ProductService){}
  ngOnDestroy(): void {
    if(this.productsSubscription){
      this.productsSubscription?.unsubscribe(); // Unsubscribe from the observable
    }
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() : void {
    this.productsSubscription = this.productService.getAllProducts(
        this.sort, 
        this.limit,
        this.category)
    .subscribe((_products) => {
      this.products = _products;
  });
  }

  columnsUpdate(colsNum : number): void {
    //console.log('Selected column', colsNum);
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }
  itemsUpdate(newLimit: number): void{
    this.limit = newLimit.toString();
    this.getAllProducts();
  }
  sortUpdate(newSort: string): void{
    this.sort = newSort;
    this.getAllProducts();
  }
  selectCategory(newCat : string): void {
    console.log('Selected category', newCat);
    this.category = newCat;
    this.getAllProducts();
  }
  
  onAddToCart(product : Product) : void {
    this.cartService.addToCart({
      id: product.id,
      product: product.url,
      price: product.price,
      name: product.name,
      qty: 1,
      total: product.price
    });
  }
}
