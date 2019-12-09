import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreateService} from '../../services/create/create.service';
import {SearchService} from '../../services/search/search.service';
import {AuthService} from '../../auth/auth-service/auth.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.page.html',
  styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit, OnDestroy {

  services = null;
  usernameTemp = null;

  constructor(
      private creator: CreateService,
      private search: SearchService,
      private auth: AuthService) {}

  ngOnInit() {
    this.services = null;
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
}
