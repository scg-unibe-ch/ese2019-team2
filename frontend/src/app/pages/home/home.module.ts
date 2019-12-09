import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {HeaderModule} from '../../components/header/header.module';
import {PreviewCardModule} from '../../components/preview-card/preview-card.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SearchbarModule} from '../../components/searchbar/searchbar.module';
import {SeparatingHeadlineModule} from '../../components/separating-headline/separating-headline.module';


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild([
         {
            path: '',
            component: HomePage
         }
      ]),
      HeaderModule,
      PreviewCardModule,
      FooterModule,
      SearchbarModule,
      SeparatingHeadlineModule
   ],
   declarations: [HomePage]
})
export class HomePageModule {
}
