import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DeleteService} from '../../services/delete/delete.service';
import {AuthService} from '../../auth/auth-service/auth.service';
import {SearchService} from '../../services/search/search.service';

@Component({
  selector: 'app-service-list-item',
  templateUrl: './service-list-item.component.html',
  styleUrls: ['./service-list-item.component.scss'],
})
export class ServiceListItemComponent implements OnInit, OnDestroy {

  currentURL;
  services;

  constructor(
      private deleteS: DeleteService,
      private auth: AuthService,
      private search: SearchService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  delete(serviceID: string) {
    console.log(serviceID);
    return this.deleteS.deleteService(serviceID)
        .subscribe(() => {
          this.getServices();
        });
  }

  getServices() {
    this.services = null;
    this.currentURL = document.URL.toString().split('/');
    console.log('hallo ' + this.currentURL[this.currentURL.length - 1]);

    if (this.currentURL[this.currentURL.length - 1] === 'admin') {
      this.search.getAllServices()
          .subscribe(data => {
            console.log(data);
            this.services = data;
          });
    } else {
      console.log(this.auth.getUsername());
      this.search.getServicesByUsername(this.auth.getUsername())
          .subscribe(data => {
            console.log(data);
            this.services = data;
          });
    }
  }

  ngOnDestroy() {
    this.services = null;
  }

}
