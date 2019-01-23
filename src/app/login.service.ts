import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  LoginbackendUrl = 'http://localhost:8080/landlord/login';

  sendData(loginUserData){
    console.log(loginUserData);
    return this.http.post<any>(this.LoginbackendUrl, loginUserData, httpOptions);
   
  }
}
