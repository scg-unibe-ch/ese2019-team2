import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {OverlayControllerModule} from '../overlay-controller/overlay-controller.module';


@NgModule({
   declarations: [HeaderComponent],
   imports: [
      CommonModule,
      OverlayControllerModule,
      IonicModule,
      RouterModule
   ],
   exports: [HeaderComponent]
})
export class HeaderModule {
}
