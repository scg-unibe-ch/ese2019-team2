import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchbarComponent} from './searchbar.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {PreviewCardModule} from '../preview-card/preview-card.module';
import {SeparatingHeadlineModule} from '../separating-headline/separating-headline.module';
import {FormsModule} from '@angular/forms';

@NgModule({
   declarations: [SearchbarComponent],
   imports: [
      CommonModule,
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
