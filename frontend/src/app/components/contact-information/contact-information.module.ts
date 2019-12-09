import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ContactInformationComponent} from './contact-information.component';


@NgModule({
   declarations: [ContactInformationComponent],
   imports: [
      CommonModule,
      IonicModule,
      RouterModule
   ],
   exports: [ContactInformationComponent]
})
export class ContactInformationModule {
}
