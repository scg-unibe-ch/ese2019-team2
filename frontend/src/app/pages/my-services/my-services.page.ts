import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreateService} from '../../services/create/create.service';
import {StorageService} from '../../services/storage/storage.service';
import {SearchService} from '../../services/search/search.service';
import {CATEGORIES} from "../../categories";
import {delay} from "rxjs/operators";
import {browser} from "protractor";
import {AuthService} from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.page.html',
  styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit, OnDestroy {

  idTemp = null;
  services = null;
  currentURL = null;
  currentUserID = null;
  usernameTemp = null;


  constructor(
      private creator: CreateService,
      private search: SearchService,
      private auth: AuthService) {}

  ngOnInit() {
    /*this.getUserIDfromURL();
    console.log(this.currentUserID);*/
    /*this.creator.getUserID()
        .subscribe(data => {
          this.idTemp = data[0]._id;
          }, err => {
          return null;
        });*/

    /*this.idTemp = this.storage.idTemp;
    console.log(this.idTemp);
    this.search.getServicesByUserID(this.idTemp)
        .pipe(delay(1000)).subscribe(data => {
          console.log(data);
          this.services = data;
        });*/

    console.log(this.auth.getUsername());
    this.usernameTemp = this.auth.getUsername();
    this.search.getServicesByUsername(this.usernameTemp)
        .subscribe(data => {
          console.log(data);
          this.services = data;
        });
  }

  ngOnDestroy() {
    this.search.getServicesByUsername(this.usernameTemp).subscribe().unsubscribe();
    this.usernameTemp = null;
    this.services = null;
  }

  /*getUserIDfromURL() {

    this.currentURL = document.URL;
    this.currentUserID = this.currentURL.toString().replace('http://localhost:8100/my-services/', '');

  }*/
}
