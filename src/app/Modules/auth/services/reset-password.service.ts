import { ChangeData } from './../model/change-data';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MobileData } from '../model/mobile-data';
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private _HttpClient: HttpClient) { }
  headers = new HttpHeaders({
    'Accept': "*/*",
    'Content-Type': 'application/json',
  });

  mobileForm(mobile: MobileData): Observable<any> {
    return this._HttpClient.post(`${environment.endPointUrl}forget-password`, mobile, { headers: this.headers });
  }
  changePasswordForm(changeData: ChangeData): Observable<any> {
    return this._HttpClient.post(`${environment.endPointUrl}change-password`, changeData ,{ headers: this.headers});
  }
}
