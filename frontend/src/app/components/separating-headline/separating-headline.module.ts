import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {SeparatingHeadlineComponent} from './separating-headline.component';


@NgModule({
   declarations: [SeparatingHeadlineComponent],
   imports: [
      CommonModule,
      IonicModule,
      RouterModule,
   ],
   exports: [SeparatingHeadlineComponent]
})
export class SeparatingHeadlineModule {
}
