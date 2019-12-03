import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../auth/auth-service/auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  getUserID() {
    const currentusername = this.auth.getUsername();
    let currentuserid;
    this.http.get<UserModel>(`http://localhost:3000/users/${currentusername}`)
        .subscribe(data => {
              currentuserid = data.id;
            },
            error => {
              console.log('Error occured.');
            });
    return currentuserid;
  }

  createNewService(category: string, subCategory: string, userID: string, title: string, img: string, price: number, location: string, description: string, rating: number) {
    const service = {
      category,
      subCategory,
      userID,
      title,
      img,
      price,
      location,
      description,
      rating
    };
    return this.http.post<any>('http://localhost:3000/services/add', service);
  }

  linktoNewService(category: string, subCategory: string, img: string) {
    this.router.navigate([`http://localhost:3000/services/details/${category}/${subCategory}/${img}`]);
  }
}
