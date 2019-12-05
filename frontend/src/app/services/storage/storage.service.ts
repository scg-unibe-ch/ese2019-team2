import { Injectable } from '@angular/core';
import {CreateService} from '../create/create.service';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  idTemp = null;

  constructor(private creator: CreateService) {
    //this.loadUserID();
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
}
