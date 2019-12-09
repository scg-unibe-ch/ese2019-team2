import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth/auth-service/auth.service';
import decode from 'jwt-decode';
import {UserModel} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';

@Component({
   selector: 'app-profile',
   templateUrl: './profile.page.html',
   styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

   currentUser = new UserModel(null, null, null, null, null, null, null);

   data = [];

   constructor(private auth: AuthService, private http: HttpClient) {
   }

   ionViewDidEnter() {
      this.makeRequest();
      this.getLastName();
      this.getFirstName();
      this.getEmail();
      this.getUserName();
   }

   ionViewDidLeave() {
      this.data = [];
   }

   ngOnInit() {
   }

   makeRequest() {
      this.auth.getUserInformation()
         .subscribe(res => {
            if (res.status !== 200) {
               return;
            }
            const userInfo = res.body.userInformation;
            const keys = Object.keys(userInfo);
            keys.forEach((key) => {
               const temp = {title: key, content: userInfo[key]};
               this.data.push(temp);
            });
         });
   }

   getUserInformation() {
      // tslint:disable-next-line:max-line-length
      return this.http.post<any>('http://localhost:3000/users/profileInformation', {token: localStorage.getItem('sessionToken')}, {observe: 'response'});
   }

   getLastName() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.lastName = tokenPayload.payload.lastName;
      console.log(this.currentUser.lastName);
   }

   getFirstName() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.firstName = tokenPayload.payload.firstName;
      console.log(this.currentUser.firstName);
   }

   getEmail() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.email = tokenPayload.payload.email;
      console.log(this.currentUser.email);
   }

   getUserName() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.username = tokenPayload.payload.username;
      console.log(this.currentUser.username);
   }
}
