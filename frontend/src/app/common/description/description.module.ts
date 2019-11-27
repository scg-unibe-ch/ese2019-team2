import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {DescriptionComponent} from './description.component';


@NgModule({
  declarations: [DescriptionComponent],
  imports: [
    CommonModule,
    AuthModule,
    IonicModule,
    RouterModule
  ],
  exports: [DescriptionComponent]
})
export class DescriptionModule { }
