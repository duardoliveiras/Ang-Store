import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

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
  upload(file: File): Observable<string>{
    const formData = new FormData();

    formData.append('image', file);
    
    return this.httpClient
      .post<ImgbbResponse>('https://', formData, { params: { key: this.apiKey }})
      .pipe(map((response) => response.data.url));

  }
}
