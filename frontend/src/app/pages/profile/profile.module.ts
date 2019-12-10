import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';
import {HeaderModule} from '../../common/header/header.module';
import {AuthModule} from '../../auth/auth.module';
import {SeparatingHeadlineModule} from '../../common/separating-headline/separating-headline.module';
import {ServiceListItemModule} from '../../common/service-list-item/service-list-item.module';

const routes: Routes = [
   {
      path: '',
      component: ProfilePage
   }
];

@NgModule({

   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      HeaderModule,
      AuthModule,
      SeparatingHeadlineModule,
      ServiceListItemModule
   ],
   declarations: [ProfilePage]
})
export class ProfilePageModule {
}
