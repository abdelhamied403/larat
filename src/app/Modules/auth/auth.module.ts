import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthWrapperComponent } from './pages/auth-wrapper/auth-wrapper.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgOtpInputModule } from 'ng-otp-input';
import { LoginComponent } from './pages/login/login.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { OtpResetPasswordComponent } from './components/otp-reset-password/otp-reset-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { MaterialModule } from 'src/app/share/material.module';
import { CustomComponentModule } from 'src/app/share/custom.component';

@NgModule({
  declarations: [
    SignUpComponent,
    AuthWrapperComponent,
    ForgetPasswordComponent,
    OtpResetPasswordComponent,
    NewPasswordComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzCarouselModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,
    NgOtpInputModule,
    NzIconModule,
    NzMessageModule,
    MaterialModule,
    CustomComponentModule
  ]
})
export class AuthModule { }
