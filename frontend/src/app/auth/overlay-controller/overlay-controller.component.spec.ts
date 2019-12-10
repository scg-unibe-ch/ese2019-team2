import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PopoverController} from '@ionic/angular';
import {AngularDelegate} from '@ionic/angular';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import {OverlayControllerComponent} from './overlay-controller.component';

describe('OverlayControllerComponent', () => {
   let component: OverlayControllerComponent;
   let fixture: ComponentFixture<OverlayControllerComponent>;
   let error: HttpErrorResponse;
   let httpController: HttpTestingController;
   let router: RouterTestingModule
   let controller: PopoverController;
   let delegate: AngularDelegate;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule, RouterTestingModule],
         providers: [PopoverController, AngularDelegate],
         declarations: [OverlayControllerComponent],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
      error = TestBed.get(HttpClient);
      httpController = TestBed.get(HttpTestingController);
      router = TestBed.get(RouterTestingModule);
      controller = TestBed.get(PopoverController);
      delegate = TestBed.get(AngularDelegate);
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(OverlayControllerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
