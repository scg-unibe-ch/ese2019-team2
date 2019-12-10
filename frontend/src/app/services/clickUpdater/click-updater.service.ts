import { Injectable } from '@angular/core';
import {RequestService} from '../request/request.service';
import {ServiceModel} from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ClickUpdaterService {

  constructor(
      private request: RequestService,
  ) { }

  increaseClicks(serviceID: string) {
    return this.request.getAsJson<ServiceModel>(`http://localhost:3000/services/edit/${serviceID}`);
  }
}
