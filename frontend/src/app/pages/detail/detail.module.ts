import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailPage} from './detail.page';

import {HeaderModule} from '../../common/header/header.module';
import {ContactInformationModule} from '../../common/contact-information/contact-information.module';
import {ImageSliderModule} from '../../common/image-slider/image-slider.module';

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
        ImageSliderModule
    ],
    declarations: [DetailPage]
})
export class DetailPageModule {
}
