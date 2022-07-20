import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
  private _ResetPasswordService: ResetPasswordService,
    private _CookieService: CookieService,
    private _NzMessageService: NzMessageService,
  private _Router:Router) { }

  ngOnInit(): void {
  }


  subscriptions: Subscription = new Subscription();
  otpEmail: any = "";
  mobileAdmin: any = "";
  





  mobileForm = new FormGroup({
    mobile: new FormControl(null, [Validators.required])
  });
  

  submitMobileForm(form: FormGroup) {
    this.mobileAdmin = form.get("mobile").value
    this._CookieService.set('MobileResetPassword' , this.mobileAdmin )    
  
    this.subscriptions.add(
      this._ResetPasswordService.mobileForm(form.value).subscribe({
          next: (v) =>  this._NzMessageService.create("success", `An OTP code has been sent to the email`),
          error: (e) => this._NzMessageService.create("error", `${e.error.message}`),
          complete: () => this._Router.navigateByUrl("/auth/otp-reset") 
      })
    )
  }

}
