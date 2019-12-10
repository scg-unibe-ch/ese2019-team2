import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceListItemComponent} from './service-list-item.component';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PreviewCardModule} from '../preview-card/preview-card.module';
import {SeparatingHeadlineModule} from '../separating-headline/separating-headline.module';


@NgModule({
   declarations: [ServiceListItemComponent],
    imports: [
        CommonModule,
        AuthModule,
        IonicModule,
        RouterModule,
        FormsModule,
        PreviewCardModule,
        SeparatingHeadlineModule,
        ReactiveFormsModule
    ],
   exports: [ServiceListItemComponent]
})
export class ServiceListItemModule {
}
