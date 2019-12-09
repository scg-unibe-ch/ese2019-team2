import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactInformationComponent} from './contact-information.component';

describe('ContactInformationComponent', () => {
   let component: ContactInformationComponent;
   let fixture: ComponentFixture<ContactInformationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ContactInformationComponent],
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
