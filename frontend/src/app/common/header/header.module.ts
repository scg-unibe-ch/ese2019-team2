import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AuthModule,
    IonicModule,
    RouterModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
