import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { LoginService } from 'src/app/Modules/auth/services/login.service';
import { ConstantsService } from '../../service/constants.service'
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req, next) {
    let tokenService = this.injector.get(LoginService);

    if (tokenService.loggedIn()) {
      req = req.clone({ headers: req.headers.set(ConstantsService.Authorization, ConstantsService.Bearer + tokenService.getToken()) })
    }
    return next.handle(req)
  }
}
