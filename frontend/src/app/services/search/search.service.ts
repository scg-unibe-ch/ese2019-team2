import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {RequestService} from '../request/request.service';
import {CategoryModel} from '../../models/category.model';
import {ServiceModel} from '../../models/service.model';

interface Service {
   serviceName: string;
   category: string;
   subCategory: string;
   userID: string;
   img: string;
   location: string;
   price: number;
   maxPeople: number;
   description: string;
   street: string;
   city: string;
   zip: string;
   phone: string;
   clicks: number;
}

@Injectable({
   providedIn: 'root'
})
export class SearchService {

   constructor(private request: RequestService, private http: HttpClient, private router: Router) {
   }

   getCategoryByName(categoryName: string) {
      return this.request.getAsJson<CategoryModel>(`http://localhost:3000/categories/name/${categoryName}`);
   }

   getAllCategories() {
      return this.request.getAsJson<CategoryModel>(`http://localhost:3000/categories/all`);
   }

   getCreatorOfService(username: string) {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/users/${username}`);
   }

   getServiceDetail(serviceID: string) {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/detail/${serviceID}`);
   }

   getAllServices() {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/all`);
   }

   searchServicesby(searchCriterion: string, searchString: string) {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/search/${searchCriterion}/${searchString}`);
   }

   getServicesByUsername(username: string) {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/user/${username}`);
   }

   getServicesByCategory(category: string) {
      return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/category/${category}`);
   }
}
