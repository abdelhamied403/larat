import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    return next.handle(req).pipe(
      tap(eve => {},
        err => {
        // onError
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403 ) {
            this.logout()
          }
        }
      })) as any;
  }

  logout() {
    console.log('redirect to logi');
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/auth/login']); //later move on context
  }
}
