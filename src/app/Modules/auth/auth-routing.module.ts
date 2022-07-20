import { NewPasswordComponent } from './components/new-password/new-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthWrapperComponent } from './pages/auth-wrapper/auth-wrapper.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { OtpResetPasswordComponent } from './components/otp-reset-password/otp-reset-password.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthWrapperComponent,
    children: [
      {path: 'signUp' , component: SignUpComponent},
      {path: 'login' , component: LoginComponent},
      { path: 'reset-password', component: ForgetPasswordComponent },
      { path: 'otp-reset', component: OtpResetPasswordComponent },
      { path: 'new-password', component: NewPasswordComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
