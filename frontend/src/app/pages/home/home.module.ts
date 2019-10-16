import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { AuthModule } from '../../auth/auth.module';
import {HeaderModule} from '../../common/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
      HeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
