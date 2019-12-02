import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
