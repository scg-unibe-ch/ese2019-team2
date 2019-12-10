import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewservicePage} from './newservice.page';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularDelegate, PopoverController} from '@ionic/angular';
import {AuthModule} from '../../auth/auth.module';

describe('NewservicePage', () => {
   let component: NewservicePage;
   let fixture: ComponentFixture<NewservicePage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [NewservicePage],
         imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
         providers: [PopoverController, AngularDelegate],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NewservicePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
