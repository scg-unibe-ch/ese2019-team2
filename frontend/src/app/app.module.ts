import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RoleGuardService } from './auth/auth-guard-service/roleguard.service';
import { CommonModule} from '@angular/common';
import {SearchService} from './services/search/search.service';
import {CreateService} from './services/create/create.service';
import {MenuModule} from './common/menu/menu.module';
import {HeaderModule} from './common/header/header.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, HeaderModule, MenuModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    RoleGuardService,
    SearchService,
    CreateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
