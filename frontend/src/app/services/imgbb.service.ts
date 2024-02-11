import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import {  firstValueFrom } from 'rxjs';

interface ImgbbResponse {
  data: {
    url: string;
  };
}


@Injectable({
  providedIn: 'root'
})

export class ImgbbService {
  
  private readonly apiKey = 'c948e36495dbc3be0c86d04a045b0156';

  constructor(private readonly httpClient: HttpClient) { }

  // Observable is a design pattern that allows us to work with asynchronous data streams
  async upload(file: File){
    const formData = new FormData();
    formData.append('image', file);

    const params = new HttpParams().set('key', this.apiKey);

    try{
      const response: any = await firstValueFrom(this.httpClient.post<any>('https://api.imgbb.com/1/upload', formData, { params }));

     if (response && response.data && response.data.url) {
        return response.data.url;
     } else {
        throw new Error('URL not found');
      }
    } catch (error) {
      console.error('Erro to send image', error);
      throw error;
    }
      
    }

  }

