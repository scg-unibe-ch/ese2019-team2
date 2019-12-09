import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EssentialComponent} from './essential.component';

describe('EssentialComponent', () => {
   let component: EssentialComponent;
   let fixture: ComponentFixture<EssentialComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EssentialComponent],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EssentialComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
