import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {OverlayContentComponent} from '../overlay-content/overlay-content.component';
import {AuthService} from '../../services/authentication/auth.service';

@Component({
   selector: 'app-overlay-controller',
   templateUrl: './overlay-controller.component.html',
   styleUrls: ['./overlay-controller.component.scss'],
})
export class OverlayControllerComponent implements OnInit {

   constructor(public popOverController: PopoverController, private auth: AuthService) {
   }

   ngOnInit() {
      this.presentOverlay(undefined);
   }

   async presentOverlay(ev: any) {
      const overlay = await this.popOverController.create({
         component: OverlayContentComponent,
         cssClass: 'overlay',
         event: ev,
         translucent: false
      });
      this.auth.setPopoverDisplayed();
      return overlay.present;
   }

}
