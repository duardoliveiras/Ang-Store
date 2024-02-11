import { Injectable } from '@angular/core';
import { Product } from '../models/product-box';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }

  postProduct(product: any){
    return this.httpClient.post<any>(`${this.apiUrl}/product/add`, product);

  }

  getAllProducts(limit='12', sort='desc') : Observable<Array<Product>>{
    return this.httpClient.get<Array<Product>>(
      `${this.apiUrl}/product/all?sort=${sort}&limit=${limit}`
    );
  }
}
