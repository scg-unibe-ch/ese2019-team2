import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import {DetailPage} from './detail.page';
import {Test} from 'tslint';

describe('DetailPage', () => {
   let component: DetailPage;
   let fixture: ComponentFixture<DetailPage>;
   let error: HttpErrorResponse
   let httpController: HttpClientTestingModule;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule, RouterTestingModule],
         declarations: [DetailPage],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
      error = TestBed.get(HttpClient);
      httpController = TestBed.get(HttpTestingController);
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DetailPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
