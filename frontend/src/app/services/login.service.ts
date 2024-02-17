import { Injectable } from '@angular/core';
import { environment } from '../../../enviroment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

apiUrl = environment.apiUrl;
  constructor(private httpClient : HttpClient) { }

  login(user : any){
    return this.httpClient.post<any>
    (`${this.apiUrl}/client/login`, {
      email: user.email,
      password: user.password
    })
    .pipe(map( (res: any) => {
      if(res && res.token){
        localStorage.setItem('currentUser', JSON.stringify(res));
      }
      console.log(res);
      return res;
    }));
  }

}
