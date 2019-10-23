import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
@Injectable()
export class RoleGuardService implements CanActivate {  
  constructor(public auth: AuthService, public router: Router) {}  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;     
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    if (!this.auth.canOpen(expectedRole)){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  }