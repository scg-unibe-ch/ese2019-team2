import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {AuthModule} from '../../auth/auth.module';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';


@NgModule({
   declarations: [MenuComponent],
   imports: [
      CommonModule,
      AuthModule,
      IonicModule,
      RouterModule
   ],
   exports: [MenuComponent]
})
export class MenuModule {
}
