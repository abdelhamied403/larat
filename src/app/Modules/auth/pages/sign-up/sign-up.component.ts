import { SignUpService } from './../../services/sign-up.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgOtpInputConfig } from 'ng-otp-input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit , OnDestroy{

  constructor(private _SignUpService: SignUpService, private _FormBuilder: FormBuilder,
  private _NzMessageService: NzMessageService ,private _Router:Router) { }
  signUpForm: FormGroup;
  // signTypeForm: FormGroup;
  inputs: any[];
  subscriptions: Subscription = new Subscription();
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: true,
    placeholder: '',
  };

  otp: any = '';
  onOtpChange(otp) {
    this.otp = otp
    localStorage.setItem('otpSginUp', this.otp)    
  }

  ngOnInit(): void {
    this.inputs = this._SignUpService.allInputs;
    this.initSignUpForm();
  }


  initSignUpForm() {
      this.signUpForm = this._FormBuilder.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required , Validators.email]],
        mobile: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        referenceNumber: [null],
        commercialNumber: [null],
        }, {
        validator: this.password.bind(this)
      }
    );

  }


  submitOtpForm() {
    const formValue ={
      "mobile": `${this.signUpForm.get("mobile").value}`,
      "otp": `${localStorage.getItem('otpSginUp')}`
    }
    this.subscriptions.add(
      this._SignUpService.otpVerify(formValue).subscribe(
        {
          next: (v) => this._NzMessageService.create("success", `Account has been created successfully`),
          error: (e) => this._NzMessageService.create("error", `${e.error.message}`),
          complete: () => this.done()
        }
      )
    )
  }

  password(formGroup: FormGroup) {
    const password = formGroup?.controls?.password?.value;
    const confirmPassword = formGroup.controls?.confirmPassword?.value;
    password === confirmPassword
      ? null
      : formGroup.controls?.confirmPassword?.setErrors({ passwordMismatchError: true });
  }

  submitForm() {
    const formValue = this.signUpForm.value;
    delete formValue.confirmPassword    
    if (formValue.referenceNumber == null ) {
      delete formValue.referenceNumber
      delete formValue.commercialNumber
    }
    
    this.subscriptions.add(
      this._SignUpService.signUp(formValue).subscribe(
        {
          next: (v) => this._NzMessageService.create("success", `An OTP code has been sent to the email`),
          error: (e) => this._NzMessageService.create("error", `${e.error.message}`),
          complete: () => this.nextTwo()
        }
      )
    )
  }


  current = 0;
  nextTwo(): void {
    this.current += 1;
  }
  nextOne(): void {
    this.current += 1;
    setTimeout(() => {
        this.changeStyLabel();
    },0)
  }

  done(): void {
    this._Router.navigateByUrl('/auth/login')
  }

    // Change Style Label
  changeStyLabel() {
    const listLabel = document.querySelectorAll(".input-radio label")
    const element = document.getElementById('form-advertiser');
    const element2= document.getElementById("form-advertiser-Individual")

    listLabel.forEach(e => {
      e.addEventListener("click", (el: any) => {
        listLabel.forEach(e => {
          e.classList.remove("clickable");
          element.style.maxHeight = '0';
          element2.style.maxHeight = '0';
        })
        if (el.target.classList.contains("two")) {
          element.style.maxHeight = element.scrollHeight + "px";
        }
        if (el.target.classList.contains("three")) {
          element2.style.maxHeight = element.scrollHeight + "px";
        }
        if (el.target.classList.contains("clickable")) {
          el.target.classList.remove("clickable")
        } else {
          el.target.classList.add("clickable")
        }
      })
    })
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
   resendCode() {
    // Its api is not ready
  }
}
