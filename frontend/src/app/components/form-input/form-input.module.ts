import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {FormInputComponent} from './form-input.component';

@NgModule({
   declarations: [FormInputComponent],
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule
   ],
   exports: [
      FormInputComponent
   ],
})
export class FormInputModule {
}
