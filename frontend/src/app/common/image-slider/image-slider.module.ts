import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ImageSliderComponent} from './image-slider.component';
import {HeaderModule} from '../header/header.module';


@NgModule({
   declarations: [ImageSliderComponent],
   imports: [
      CommonModule,
      AuthModule,
      IonicModule,
      RouterModule,
      HeaderModule
   ],
   exports: [ImageSliderComponent]
})
export class ImageSliderModule {
}
