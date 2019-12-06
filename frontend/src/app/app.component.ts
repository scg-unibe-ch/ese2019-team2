import { Component } from '@angular/core';
import {AuthService} from "./auth/auth-service/auth.service";
import {CreateService} from "./services/create/create.service";
import {StorageService} from "./services/storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private creator: CreateService, private storage: StorageService) {
    /*if (this.auth.isLoggedIn()) {
      this.creator.getUserID()
          .subscribe(data => {
            this.storage.idTemp = data[0]._id;
          }, err => {
            return null;
          });
    }
    console.log(this.storage.idTemp);*/
  }
}
