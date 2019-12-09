import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailPage} from './detail.page';
import {HeaderModule} from '../../components/header/header.module';
import {ContactInformationModule} from '../../components/contact-information/contact-information.module';
import {ImageSliderModule} from '../../components/image-slider/image-slider.module';
import {EssentialModule} from '../../components/essential/essential.module';
import {DescriptionModule} from '../../components/description/description.module';


const routes: Routes = [
   {
      path: '',
      component: DetailPage
   }
];

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      HeaderModule,
      ContactInformationModule,
      ImageSliderModule,
      EssentialModule,
      DescriptionModule
   ],
   declarations: [DetailPage]
})
export class DetailPageModule {
}
