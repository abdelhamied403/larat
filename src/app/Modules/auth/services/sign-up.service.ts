import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OtpVerify } from '../model/otp-verify';
import { SignUpData } from '../model/sign-up-data';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private _HttpClient: HttpClient) { }

  allInputs:any = [
    {
      id: 'name',
      title: 'Name',
      controlName: 'name',
      srcIcon: '../../../../../assets/img/auth/icon/user-circle.svg',
      type:'text'
    },
    {
      id: 'email',
      title: 'Email',
      controlName: 'email',
      srcIcon: '../../../../../assets/img/auth/icon/mail.svg',
      type:'text'
    },
    {
      id: 'mobile',
      title: 'Phone number',
      controlName: 'mobile',
      srcIcon: '../../../../../assets/img/auth/icon/call.svg',
      type:'tel'
    },
    {
      id: 'password',
      title: 'Password',
      controlName: 'password',
      srcIcon: '../../../../../assets/img/auth/icon/lock.svg',
      type:'password'
    },
    {
      id: 'c-password',
      title: 'Confirm Password',
      controlName: 'confirmPassword',
      srcIcon: '../../../../../assets/img/auth/icon/lock.svg',
      type:'password'
    },
  ]
    headers = new HttpHeaders({
    'Accept': "*/*",
    'Content-Type': 'application/json',
  });

  signUp(signData: SignUpData): Observable<any> {
    return this._HttpClient.post(`${environment.endPointUrl}register/seeker`, signData ,{ headers: this.headers});
  }
  otpVerify(data: OtpVerify): Observable<any> {
    return this._HttpClient.post(`${environment.endPointUrl}otp/verify`, data ,{ headers: this.headers});
  }
}
