import {Injectable} from '@angular/core';
import {CreateService} from '../create/create.service';
import {error} from 'util';
import {ServiceModel} from '../../models/service.model';

@Injectable({
   providedIn: 'root'
})
export class StorageService {

   idTemp = null;
   currentService = ServiceModel;

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

   setService(currentService) {
      this.currentService = currentService;
   }

}
