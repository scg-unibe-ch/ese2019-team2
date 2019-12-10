import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';
import {HttpClient} from '@angular/common/http';
import {ServiceModel} from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(
      private request: RequestService,
      private http: HttpClient
  ) { }

  deleteService(serviceID: string) {
    return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/delete/${serviceID}`);
  }
}
