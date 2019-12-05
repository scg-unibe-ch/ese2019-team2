import { Component, OnInit } from '@angular/core';
import {CreateService} from '../../services/create/create.service';
import {StorageService} from '../../services/storage/storage.service';
import {SearchService} from '../../services/search/search.service';
import {CATEGORIES} from "../../categories";
import {delay} from "rxjs/operators";
import {browser} from "protractor";

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.page.html',
  styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit {

  idTemp = null;
  services = null;
  currentURL = null;
  currentUserID = null;


  constructor(
      private creator: CreateService,
      private search: SearchService,
      private storage: StorageService) {}

  ngOnInit() {
    /*this.getUserIDfromURL();
    console.log(this.currentUserID);*/
    /*this.creator.getUserID()
        .subscribe(data => {
          this.idTemp = data[0]._id;
          }, err => {
          return null;
        });*/
    this.idTemp = this.storage.idTemp;
    console.log(this.idTemp);
    this.search.getServicesByUser(this.idTemp)
        .pipe(delay(1000)).subscribe(data => {
          console.log(data);
          this.services = data;
        });
  }

  getUserIDfromURL() {

    this.currentURL = document.URL;
    this.currentUserID = this.currentURL.toString().replace('http://localhost:****/my-services/', '');

  }
}
