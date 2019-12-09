import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewservicePage} from './newservice.page';

describe('NewservicePage', () => {
   let component: NewservicePage;
   let fixture: ComponentFixture<NewservicePage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [NewservicePage],
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
