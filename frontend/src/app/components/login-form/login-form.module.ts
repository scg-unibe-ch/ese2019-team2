import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {LoginFormComponent} from './login-form.component';
import {FormInputModule} from '../form-input/form-input.module';

@NgModule({
   declarations: [LoginFormComponent],
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule,
      ReactiveFormsModule,
      FormInputModule,
   ],
   exports: [LoginFormComponent]
})
export class LoginFormModule {
}
