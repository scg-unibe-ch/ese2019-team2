import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search.page';
import {SearchbarModule} from '../../common/searchbar/searchbar.module';
import {HeaderModule} from '../../common/header/header.module';
import {AuthModule} from '../../auth/auth.module';

const routes: Routes = [
   {
      path: '',
      component: SearchPage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      SearchbarModule,
      HeaderModule,
      AuthModule
   ],
   declarations: [SearchPage]
})
export class SearchPageModule {
}
