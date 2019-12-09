import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {NewServicePage} from './new-service-page.component';
import {FormInputModule} from '../../components/form-input/form-input.module';
import {HeaderModule} from '../../components/header/header.module';

const routes: Routes = [
   {
      path: '',
      component: NewServicePage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      FormInputModule,
      ReactiveFormsModule,
      HeaderModule
   ],
   declarations: [NewServicePage]
})
export class NewservicePageModule {
}
