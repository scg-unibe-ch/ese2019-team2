import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewservicePage } from './newservice.page';
import { AuthModule} from '../../auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: NewservicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AuthModule
  ],
  declarations: [NewservicePage]
})
export class NewservicePageModule {}
