import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailPage} from './detail.page';

import {HeaderModule} from '../../common/header/header.module';
import {ContactInformationModule} from '../../common/contact-information/contact-information.module';
import {ImageSliderModule} from '../../common/image-slider/image-slider.module';
import {EssentialModule} from '../../common/essential/essential.module';
import {DescriptionModule} from '../../common/description/description.module';
import {SeparatingHeadlineModule} from '../../common/separating-headline/separating-headline.module';
import {AuthModule} from '../../auth/auth.module';
import {FooterModule} from '../../common/footer/footer.module';

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
      AuthModule,
      ContactInformationModule,
      ImageSliderModule,
      EssentialModule,
      DescriptionModule,
      SeparatingHeadlineModule,
      FooterModule,
   ],
   declarations: [DetailPage]
})
export class DetailPageModule {
}
