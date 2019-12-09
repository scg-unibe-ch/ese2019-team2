import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {EssentialComponent} from './essential.component';


@NgModule({
   declarations: [EssentialComponent],
   imports: [
      CommonModule,
      IonicModule,
      RouterModule
   ],
   exports: [EssentialComponent]
})
export class EssentialModule {
}
