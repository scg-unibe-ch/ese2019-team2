import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularDelegate, PopoverController} from '@ionic/angular';

describe('LoginFormComponent', () => {
   let component: LoginFormComponent;
   let fixture: ComponentFixture<LoginFormComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [LoginFormComponent],
         imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
         providers: [PopoverController, AngularDelegate],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(LoginFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
