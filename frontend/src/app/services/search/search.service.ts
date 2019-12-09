import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ServiceModel} from '../../models/service.model';
import {RequestService} from '../request/request.service';

@Injectable({
   providedIn: 'root'
})
export class SearchService {

   currentService = ServiceModel;

   constructor(private request: RequestService, private http: HttpClient, private router: Router) {
   }

   getServiceDetail(serviceID: string) {
      return this.request.getAsJson<Service>('http://localhost:3000/services/detail/${serviceID}');
   }

   searchServicesBy(searchCriterion: string, searchString: string) {
      return this.request.getAsJson<Service>('http://localhost:3000/services/search/${searchCriterion}/${searchString}');
   }

   getServicesByUserID(userID: string) {
      return this.request.getAsJson<Service>('http://localhost:3000/services/user/${userID');
   }

   getServicesByUserName(userName: string) {
      return this.request.getAsJson<Service>('http://localhost:3000/services/user/${userName}');
   }

   getServicesByCategory(category: string) {
      return this.request.getAsJson<Service>('http://localhost:3000/services/category/${category}');
   }

   setService(currentService) {
      this.currentService = currentService;
   }
}
