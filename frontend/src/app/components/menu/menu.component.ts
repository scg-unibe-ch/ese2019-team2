import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from '../../services/authentication/auth.service';
import {CreateService} from '../../services/create/create.service';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


   constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private auth: AuthService,
   ) {
   }

   ngOnInit() {
      this.initializeApp();
      /*if (this.auth.isLoggedIn()) {
        this.loadUserID();
      }*/
   }

   initializeApp() {
      this.platform.ready().then(() => {
         this.statusBar.styleDefault();
         this.splashScreen.hide();
      });
   }

   /*loadUserID() {
     return this.creator.getUserID()
         .pipe(delay(1000)).subscribe(data => {
           this.idTemp = data[0]._id;
         });
   }
 
   loadLinkToMyServices() {
     this.linkToMyServices = `/my-services/${this.idTemp}`;
     return this.linkToMyServices;
   }*/
}
