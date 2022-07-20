import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from 'src/app/Modules/auth/services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


     constructor(
          private router: Router,
          private authenticationService: LoginService
     ) { }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          const currentUser = this.authenticationService.loggedIn();

          if (currentUser) {
               return true;
          }
          this.router.navigate(['/auth/login']);
          return false;
     }
}
