import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewCardComponent} from './preview-card.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PreviewCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [PreviewCardComponent]
})
export class PreviewCardModule { }
