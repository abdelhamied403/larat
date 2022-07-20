import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../Core/interceptor/http-interceptor';
import { UnauthorizedInterceptor } from '../Core/interceptor/unauthorized.interceptor';
import { LoaderInterceptor } from '../Core/interceptor/loaderinterceptor';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }
  ]

})
export class SharedModule { }
