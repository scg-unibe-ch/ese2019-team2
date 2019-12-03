import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SERVICES} from '../../mock-services';
import {ServiceModel} from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  services: ServiceModel;

  constructor(private http: HttpClient, private router: Router) { }

  searchServiceDetail() {

  }

  searchServicesby(searchparam: string) {

  }

  getServicesByCategory(category: string) {
    this.http.get<ServiceModel>(`http://localhost:3000/services/${category}`)
        .subscribe(data => {
          this.services = data;
        });
    return this.services;
  }

}
