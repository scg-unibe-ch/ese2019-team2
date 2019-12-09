import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FormInputModule} from '../form-input/form-input.module';

import {RegisterFormComponent} from './register-form.component';

@NgModule({
   declarations: [RegisterFormComponent],
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule,
      FormInputModule,
   ],
   exports: [RegisterFormComponent]
})
export class RegisterFormModule {
}
