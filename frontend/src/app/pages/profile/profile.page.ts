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

   changedUser = new UserModel(null, null, null, null, null, null, null);

   allowEdit = false;

   data = [];

   constructor(private auth: AuthService, private http: HttpClient) {
   }

   ionViewDidEnter() {
      this.getUserId();
      this.getUserName();
      this.getLastName();
      this.getFirstName();
      this.getEmail();
      this.getUserRole();
   }

   ionViewDidLeave() {
      this.data = [];
   }

   ngOnInit() {
   }

   onClick() {
      this.allowEdit = true;
   }

   onSubmit() {
      this.changedUser.id = this.currentUser.id;
      console.log(this.changedUser.id);
      this.changedUser.token = this.currentUser.token;
      console.log(this.changedUser.token, this.currentUser.token);
      this.changedUser.username = this.currentUser.username;
      console.log(this.changedUser.username, this.currentUser.username);
      this.changedUser.lastName = this.currentUser.lastName;
      console.log(this.changedUser.lastName);
      this.changedUser.firstName = this.currentUser.firstName;
      console.log(this.changedUser.firstName);
      this.changedUser.email = this.currentUser.email;
      console.log(this.changedUser.email);
      this.changedUser.role = this.currentUser.role;
      console.log(this.changedUser.role, this.currentUser.role);
      this.allowEdit = false;
   }

   getUserInformation() {
      // tslint:disable-next-line:max-line-length
      return this.http.post<any>('http://localhost:3000/users/profileInformation', {token: localStorage.getItem('sessionToken')}, {observe: 'response'});
   }

   getUserId() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.id = tokenPayload.payload.userid;
      console.log(this.currentUser.id);
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

   getUserRole() {
      const token = localStorage.getItem('sessionToken');
      const tokenPayload = decode(token);
      this.currentUser.role = tokenPayload.payload.role;
      console.log(this.currentUser.role);
   }
}
