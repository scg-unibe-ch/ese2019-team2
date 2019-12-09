import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewServicePage} from './new-service-page.component';

describe('NewservicePage', () => {
   let component: NewServicePage;
   let fixture: ComponentFixture<NewServicePage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [NewServicePage],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(NewServicePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
