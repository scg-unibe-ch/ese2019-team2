import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AdminPage} from './admin.page';
import {HeaderModule} from 'src/app/common/header/header.module';
import {AuthModule} from '../../auth/auth.module';

const routes: Routes = [
   {
      path: '',
      component: AdminPage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      HeaderModule,
      AuthModule,
      RouterModule.forChild(routes)
   ],
   declarations: [AdminPage]
})
export class AdminPageModule {
}
