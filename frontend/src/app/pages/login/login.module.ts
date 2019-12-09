import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {HeaderModule} from '../../components/header/header.module';
import {LoginFormModule} from '../../components/login-form/login-form.module';

const routes: Routes = [
   {
      path: '',
      component: LoginPage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      HeaderModule,
      LoginFormModule
   ],
   declarations: [LoginPage]
})
export class LoginPageModule {
}
