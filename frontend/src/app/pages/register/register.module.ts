import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {RegisterPage} from './register.page';
import {AuthModule} from '../../auth/auth.module';

import {HeaderModule} from '../../common/header/header.module';

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
      AuthModule,
      HeaderModule,
   ],
   declarations: [RegisterPage]
})
export class RegisterPageModule {
}
