import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FormInputModule} from '../form-input/form-input.module';

import {OverlayControllerComponent} from './overlay-controller.component';

@NgModule({
   declarations: [OverlayControllerComponent],
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule,
      FormInputModule,
   ],
   exports: [OverlayControllerComponent]
})
export class OverlayControllerModule {
}
