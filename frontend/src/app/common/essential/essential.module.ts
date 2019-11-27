import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {EssentialComponent} from './essential.component';


@NgModule({
  declarations: [EssentialComponent],
  imports: [
    CommonModule,
    AuthModule,
    IonicModule,
    RouterModule
  ],
  exports: [EssentialComponent]
})
export class EssentialModule { }
