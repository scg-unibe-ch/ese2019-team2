import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {ServiceModel} from '../../models/service.model';
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {RequestService} from '../request/request.service';

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
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  services = null;

  constructor(private request: RequestService, private http: HttpClient, private router: Router) { }

  searchServiceDetail() {

  }

  searchServicesby(searchparam: string) {

  }

  getServicesByCategory(category: string) {

    return this.request.getAsJson<Service>(`http://localhost:3000/services/${category}`);

    /*this.http.get<Service>(`http://localhost:3000/services/${category}`)
        .subscribe(data => {
          this.setServices(data);
          return this.services;
        });
    return this.services;*/

    /*let i: number;
    for (let service of SERVICES) {
      if (service.category === category) {
        this.services[i] = service;
        i++;
      }
    }
    return this.services;*/
  }

  setServices(services) {
    this.services = services;
  }

}
