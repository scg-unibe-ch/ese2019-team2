import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../auth/auth-service/auth.service';
import {Router} from '@angular/router';

interface User {
  _id: string;
  lastname: string;
  firstname: string;
  email: string;
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  currentuserid;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  getUserID() {
    const currentusername = this.auth.getUsername();
    this.http.get<User>(`http://localhost:3000/users/${currentusername}`)
        .subscribe(data => {
              this.currentuserid = data[0]._id;
              return this.currentuserid;
            },
            error => {
              console.log('Error occured.');
            });
    return this.currentuserid;
  }

  createNewService(category: string, subCategory: string, userID: string, name: string, img: string, price: number, maxPeople: number, location: string, street: string, city: string, zip: number, description: string, rating: number) {
    const service = {
      category,
      subCategory,
      userID,
      name,
      img,
      price,
      maxPeople,
      location,
      street,
      city,
      zip,
      description,
      rating
    };
    return this.http.post<any>('http://localhost:3000/services/add', service);
  }

  linktoNewService(category: string, subCategory: string, img: string) {
    this.router.navigate([`http://localhost:3000/services/details/${category}/${subCategory}/${img}`]);
  }
}
