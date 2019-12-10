import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchbarComponent} from './searchbar.component';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PreviewCardModule} from '../preview-card/preview-card.module';
import {SeparatingHeadlineModule} from '../separating-headline/separating-headline.module';


@NgModule({
   declarations: [SearchbarComponent],
   imports: [
      CommonModule,
      AuthModule,
      IonicModule,
      RouterModule,
      FormsModule,
      PreviewCardModule,
      SeparatingHeadlineModule
   ],
   exports: [SearchbarComponent]
})
export class SearchbarModule {
}
