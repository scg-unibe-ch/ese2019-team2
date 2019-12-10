import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactInformationComponent} from './contact-information.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ContactInformationComponent', () => {
   let component: ContactInformationComponent;
   let fixture: ComponentFixture<ContactInformationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ContactInformationComponent],
         imports: [HttpClientTestingModule, RouterTestingModule],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ContactInformationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
