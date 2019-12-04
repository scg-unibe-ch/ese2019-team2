import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {ServiceModel} from '../../models/service.model';

interface Service {
  id: number;
  img: string;
  name: string;
  category: string;
  location: string;
  price: string;
  maxPeople: string;
  description: string;
  street: string;
  city: string;
  zip: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  services;

  constructor(private http: HttpClient, private router: Router) { }

  searchServiceDetail() {

  }

  searchServicesby(searchparam: string) {

  }

  getServicesByCategory(category: string) {
    this.http.get<Service>(`http://localhost:3000/services/${category}`)
        .subscribe(data => {
          this.services = data;
          return this.services;
        });
    return this.services;

    /*let i: number;
    for (let service of SERVICES) {
      if (service.category === category) {
        this.services[i] = service;
        i++;
      }
    }
    return this.services;*/
  }

}
