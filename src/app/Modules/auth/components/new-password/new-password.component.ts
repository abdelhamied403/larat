import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  constructor(private _ResetPasswordService: ResetPasswordService,
    private _FormBuilder: FormBuilder,
    private _CookieService: CookieService,
    private _NzMessageService: NzMessageService,
  private _Router:Router) { }

  ngOnInit(): void {
    this.initnewPasswordForm();
  }
  subscriptions: Subscription = new Subscription();
  passwordVisible = false;

  newPasswordForm: FormGroup;
  initnewPasswordForm() {
    this.newPasswordForm = this._FormBuilder.group({
      mobile: this._CookieService.get('MobileResetPassword'),
      otp: this._CookieService.get('otpResetPassword'),
      newPassword: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    },
    {
        validator: this.password.bind(this)
    })
  }


  password(formGroup: FormGroup) {
    const password = formGroup?.controls?.newPassword?.value;
    const confirmPassword = formGroup.controls?.confirmPassword?.value;
    password === confirmPassword
      ? null
      : formGroup.controls?.confirmPassword?.setErrors({ passwordMismatchError: true });
  }
  submitNewPassForm(form: FormGroup) {
    const formValue = this.newPasswordForm.value;
    delete formValue.confirmPassword

    this.subscriptions.add(
      this._ResetPasswordService.changePasswordForm(formValue).subscribe({
          next: (v) => this._NzMessageService.create("success", `Done Change Password`),
          error: (e) => this._NzMessageService.create("error", `${e.error.message}`),
          complete: () => this._Router.navigateByUrl("/auth/login") 
      })
    )
  }

} 
