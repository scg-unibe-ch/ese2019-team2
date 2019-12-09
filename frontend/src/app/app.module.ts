import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HeaderModule} from './components/header/header.module';
import {MenuModule} from './components/menu/menu.module';
import {SearchbarModule} from './components/searchbar/searchbar.module';
import {SeparatingHeadlineModule} from './components/separating-headline/separating-headline.module';
import {AuthService} from './services/authentication/auth.service';
import {RoleGuardService} from './services/roleguard/roleguard.service';
import {SearchService} from './services/search/search.service';
import {CreateService} from './services/create/create.service';

@NgModule({
   declarations: [AppComponent],
   entryComponents: [],
   imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      HeaderModule,
      MenuModule,
      SearchbarModule,
      SeparatingHeadlineModule
   ],
   providers: [
      StatusBar,
      SplashScreen,
      AuthService,
      RoleGuardService,
      SearchService,
      CreateService,
      {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
   ],
   bootstrap: [AppComponent]
})
export class AppModule {
}
