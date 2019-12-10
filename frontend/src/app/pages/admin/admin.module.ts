import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AdminPage} from './admin.page';
import {HeaderModule} from 'src/app/common/header/header.module';
import {ServiceListItemModule} from "../../common/service-list-item/service-list-item.module";
import {SeparatingHeadlineModule} from "../../common/separating-headline/separating-headline.module";

const routes: Routes = [
   {
      path: '',
      component: AdminPage
   }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        RouterModule.forChild(routes),
        ServiceListItemModule,
        SeparatingHeadlineModule
    ],
   declarations: [AdminPage]
})
export class AdminPageModule {
}
