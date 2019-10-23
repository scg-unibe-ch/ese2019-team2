import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import decode from 'jwt-decode';
import { TokenType } from '@angular/compiler';
@Injectable()
export class RoleGuardService implements CanActivate {  
  constructor(public auth: AuthService, public router: Router) {}  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;     
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    const token = localStorage.getItem('sessionToken');    // decode the token to get its payload
    const tokenPayload = decode(token).payload;   
    if(tokenPayload.role !== expectedRole){
      if (expectedRole === 'user' && tokenPayload.role === 'admin'){
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  }