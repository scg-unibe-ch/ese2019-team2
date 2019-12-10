import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuComponent', () => {
   let component: MenuComponent;
   let fixture: ComponentFixture<MenuComponent>;
   let splash: SplashScreen;
   let platForm: Platform;
   let statusBar: StatusBar;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [MenuComponent],
         imports: [HttpClientTestingModule, RouterTestingModule],
         providers: [SplashScreen, Platform, StatusBar],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
      splash = TestBed.get(SplashScreen);
      platForm = TestBed.get(Platform);
      statusBar = TestBed.get(StatusBar);
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MenuComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
