import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) { }

  headers = new HttpHeaders({
    'Accept': "*/*",
    'Content-Type': 'application/json',
  });

  login(loginData: any): Observable<any> {
    return this._HttpClient.post(`${environment.endPointUrl}login`, loginData ,{ headers: this.headers});
  }

  getToken() {
    console.log("token ::::::::: " + sessionStorage.getItem('token'));
    return sessionStorage.getItem('token')
  }

  loggedIn() {
    return !!sessionStorage.getItem('token')
  }
}
