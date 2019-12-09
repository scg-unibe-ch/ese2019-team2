import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {OverlayContentComponent} from './overlay-content.component';

@NgModule({
   declarations: [OverlayContentComponent],
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule,
   ],
   exports: [OverlayContentComponent]
})
export class OverlayContentModule {
}
