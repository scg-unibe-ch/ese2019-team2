import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header.component';
import {AuthModule} from '../../auth/auth.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
   declarations: [HeaderComponent],
   imports: [
      RouterModule,
      CommonModule,
      HttpClientModule,
      AuthModule,
      IonicModule,
   ],
   exports: [HeaderComponent]
})
export class HeaderModule {
}
