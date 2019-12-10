import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth-service/auth.service';
import {SearchService} from '../../services/search/search.service';
import {ServiceModel} from '../../models/service.model';

@Component({
   selector: 'app-contact-information',
   templateUrl: './contact-information.component.html',
   styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {

   @Input() service: ServiceModel;

   creatorOfService = null;

   constructor(
       private auth: AuthService,
       private search: SearchService
   ) {
   }

   ngOnInit() {
      console.log('username: ' + this.service.username);
      this.search.getCreatorOfService(this.service.username)
          .subscribe(data => {
             console.log(data);
             this.creatorOfService = data[0];
          });
   }

}
