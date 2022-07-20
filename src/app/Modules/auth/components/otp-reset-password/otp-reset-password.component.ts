import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgOtpInputConfig } from 'ng-otp-input';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-otp-reset-password',
  templateUrl: './otp-reset-password.component.html',
  styleUrls: ['./otp-reset-password.component.scss']
})
export class OtpResetPasswordComponent implements OnInit {
  constructor(private _CookieService: CookieService , private _Router:Router) { 
  }

  ngOnInit(): void {
  }
  subscriptions: Subscription = new Subscription();
  otp: any = '';
  onOtpChange(otp) {
    this.otp = otp
  }
  
   config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '',
   };
   
  submitOtpForm() {
    this._CookieService.set('otpResetPassword', this.otp)      
    this._Router.navigateByUrl('/auth/new-password')

  }
  resendCode() {
    // Its api is not ready
  }
}
