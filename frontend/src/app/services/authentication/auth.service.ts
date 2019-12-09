import {Injectable} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {decode} from 'jwt-decode';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   currentUser: UserModel;
   suppressPopover = false;

   constructor(private http: HttpClient, private router: Router) {
   }

   login(userName: string, password: string) {
      return this.http.post<any>('http://localhost:3000/users/login', {userName, password}, {observe: 'response'})
         .pipe(map(data => {
            const userInformation = (data.body.userInformation);
            const token = data.body.token;
            const expirationTime = decode(token).exp;
            if (data.status === 200 && userInformation.userName) {
               this.currentUser = this.generateUserFromJSON(userInformation, token);
               localStorage.setItem('sessionToken', this.currentUser.token);
               localStorage.setItem('expiration', expirationTime);
               return this.currentUser;
            }
         }));
   }

   logout() {
      this.removeItems();
      this.suppressPopover = true;
      this.router.navigate(['/']);
   }

   register(
      lastName: string,
      firstName: string,
      email: string,
      userName: string,
      password: string,
      role: string) {

      return this.http.post<any>('http://localhost:3000/users/register', {
         lastName,
         firstName,
         userName,
         email,
         password,
         role
      }, {observe: 'response'})
         .pipe(map(data => {
            const userInformation = (data.body.userInformation);
            const token = data.body.token;
            const expirationTime = decode(token).exp;
            if (data.status === 201 && userInformation.userName) {
               this.currentUser = this.generateUserFromJSON(userInformation, token);
               localStorage.setItem('sessionToken', this.currentUser.token);
               localStorage.setItem('expiration', expirationTime);
               return this.currentUser;
            }
         }));
   }

   generateUserFromJSON(data, token): UserModel {
      return new UserModel(data._id, token, data.lastName, data.firstName, data.userName, data.email, data.role);
   }

   isLoggedIn(): boolean {
      if (!Boolean(localStorage.getItem('sessionToken'))) {
         return false;
      }
      const dateNow: number = Math.floor(Date.now() / 1000);
      // tslint:disable-next-line:radix
      const expiration: number = parseInt(localStorage.getItem('expiration'));
      const expired = expiration - dateNow < 0;
      if (expired) {
         this.removeItems();
      }
      return (!expired);
   }

   displayPopover(): boolean {
      return !this.suppressPopover;
   }

   setPopoverDisplayed() {
      this.suppressPopover = true;
   }

   removeItems() {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('expiration');
   }

   canOpen(expectedRole: string) {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      const currentRole = tokenPayload.payload.role;
      if (expectedRole === currentRole) {
         return true;
      } else {
         return expectedRole === 'user' && currentRole === 'admin';
      }
   }

   getUserInformation() {
      // tslint:disable-next-line:max-line-length
      return this.http.post<any>('http://localhost:3000/users/profileInformation', {token: localStorage.getItem('sessionToken')}, {observe: 'response'});
   }

   getUserName() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      return tokenPayload.payload.userName;
   }
}
