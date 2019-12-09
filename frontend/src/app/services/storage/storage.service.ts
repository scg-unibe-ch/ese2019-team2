import { Injectable } from '@angular/core';
import {CreateService} from '../create/create.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  idTemp = null;
  services = null;

  constructor(private creator: CreateService) {
    // this.loadUserID();
  }

  loadUserID() {
    return this.creator.getUserID()
        .subscribe(data => {
          this.idTemp = data[0]._id;
        },
        err => {
          return null;
        });
  }

  setServices(services) {
      this.services = services;
  }
}
