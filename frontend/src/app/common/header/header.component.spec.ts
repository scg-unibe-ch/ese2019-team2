import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
   let component: HeaderComponent;
   let fixture: ComponentFixture<HeaderComponent>;
   let error: HttpErrorResponse;
   let httpController: HttpTestingController;
   let router: RouterTestingModule;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule, RouterTestingModule],
         declarations: [HeaderComponent],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
      error = TestBed.get(HttpClient);
      httpController = TestBed.get(HttpTestingController);
      router = TestBed.get(RouterTestingModule);
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
