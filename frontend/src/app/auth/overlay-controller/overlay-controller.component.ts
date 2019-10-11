import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OverlayContentComponent } from '../overlay-content/overlay-content.component';

@Component({
  selector: 'app-overlay-controller',
  templateUrl: './overlay-controller.component.html',
  styleUrls: ['./overlay-controller.component.scss'],
})
export class OverlayControllerComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.presentOverlay(undefined);
  }
  async presentOverlay(ev: any){
    const overlay = await this.popoverController.create({
      component: OverlayContentComponent,
      cssClass: 'overlay',
      event: ev,
      translucent: false
    });
    return await overlay.present();
  }
}
