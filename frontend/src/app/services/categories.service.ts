import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  // This method returns an array of strings
  getCateogories(){
    return ['clothes', 'shoes', 'sports'];
  }
}
