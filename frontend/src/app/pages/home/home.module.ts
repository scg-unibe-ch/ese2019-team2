import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';

import {AuthModule} from '../../auth/auth.module';
import {HeaderModule} from '../../common/header/header.module';
import {PreviewCardModule} from '../../common/preview-card/preview-card.module';
import {FooterModule} from '../../common/footer/footer.module';
import {SearchbarModule} from '../../common/searchbar/searchbar.module';
import {SeparatingHeadlineModule} from '../../common/separating-headline/separating-headline.module';

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
