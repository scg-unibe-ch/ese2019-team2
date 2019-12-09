import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RegisterPage} from './register.page';
import {RegisterFormModule} from '../../components/register-form/register-form.module';
import {HeaderModule} from '../../components/header/header.module';

const routes: Routes = [
   {
      path: '',
      component: RegisterPage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      RegisterFormModule,
      HeaderModule
   ],
   declarations: [RegisterPage]
})
export class RegisterPageModule {
}
