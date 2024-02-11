import { Injectable } from '@angular/core';
import { Product } from '../models/product-box';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }

  postProduct(product: any){
    return this.httpClient.post<any>(`${this.apiUrl}/product/add`, product);

  }
}
