import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyServicesPage } from './my-services.page';
import {HeaderModule} from '../../common/header/header.module';
import {PreviewCardModule} from '../../common/preview-card/preview-card.module';

const routes: Routes = [
  {
    path: '',
    component: MyServicesPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HeaderModule,
        PreviewCardModule
    ],
  declarations: [MyServicesPage]
})
export class MyServicesPageModule {}
