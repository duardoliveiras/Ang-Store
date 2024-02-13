import { Injectable } from '@angular/core';
import { Product } from '../models/product-box';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable } from 'rxjs'; // Observable represent a stream of data that can be observed



// On Angular Observable is used to handle HTTP requests
// When HTTPS requests are made, the Observable will return the response from the server

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }

  postProduct(product: any){
    return this.httpClient.post<any>(`${this.apiUrl}/product/add`, product);

  }
  // ? is used to make the parameter optional
  getAllProducts(sort='asc', limit='12', category?: string) : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${this.apiUrl}/product${category ? '/category/' + category : '/all' 
       }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories() : Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `${this.apiUrl}/product/categories`,
    );
  }
}
