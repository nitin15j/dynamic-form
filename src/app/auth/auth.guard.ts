import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad, Route, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * This method will return session value for route to be activated
   * @return boolean
   */

  canActivate(next: ActivatedRouteSnapshot): boolean {
    return true;
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  canLoad(route: Route): boolean {
    return true;
    let url: string = route.path;
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
