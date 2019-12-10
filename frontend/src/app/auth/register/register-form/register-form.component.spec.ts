import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularDelegate, PopoverController} from '@ionic/angular';

describe('RegisterFormComponent', () => {
   let component: RegisterFormComponent;
   let fixture: ComponentFixture<RegisterFormComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RegisterFormComponent],
         imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
         providers: [PopoverController, AngularDelegate],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RegisterFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
