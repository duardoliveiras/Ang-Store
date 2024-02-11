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

  getAllProducts(sort='desc', limit='12') : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${this.apiUrl}/product/all?sort=${sort}&limit=${limit}`
    );
  }
}
