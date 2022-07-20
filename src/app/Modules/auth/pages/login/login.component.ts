import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {

  constructor(
    private _LoginService: LoginService,
    private _NzMessageService: NzMessageService,
    private _Router: Router,
    private _CookieService: CookieService
  ) { }

  ngOnInit(): void {
  } 
  subscriptions: Subscription = new Subscription();
  passwordVisible = false;
  password?: string;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl("", [Validators.required])
  })


  submitFormLogin(form: FormGroup) {
    
    this.subscriptions.add(
      this._LoginService.login(form.value).subscribe(
      {
          next: (resp) => {  
          sessionStorage.setItem('token', resp.token);
          this._NzMessageService.create("success", `You are logged in successfully`)
          },
          error: (e) => this._NzMessageService.create("error", `${e.error.message}`),
          complete: () =>  this._Router.navigateByUrl('/home')
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  logoutUser() {
    console.log("calling logoutUser ::::::::: ");
    //.this.stopWatching();
    sessionStorage.removeItem('token')
    this._Router.navigate(['/'])
  }

}
