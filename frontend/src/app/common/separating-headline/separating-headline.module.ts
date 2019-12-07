import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SeparatingHeadlineComponent} from './separating-headline.component';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PreviewCardModule} from '../preview-card/preview-card.module';


@NgModule({
  declarations: [SeparatingHeadlineComponent],
    imports: [
        CommonModule,
        AuthModule,
        IonicModule,
        RouterModule,
        FormsModule,
        PreviewCardModule
    ],
  exports: [ SeparatingHeadlineComponent ]
})
export class SeparatingHeadlineModule { }
