import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SeparatingHeadlineComponent} from './separating-headline.component';

describe('SeparatingHeadlineComponent', () => {
   let component: SeparatingHeadlineComponent;
   let fixture: ComponentFixture<SeparatingHeadlineComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [SeparatingHeadlineComponent],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SeparatingHeadlineComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
