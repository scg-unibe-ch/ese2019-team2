import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OverlayContentComponent} from './overlay-content.component';

describe('RegisterOverlayContentComponent', () => {
   let component: OverlayContentComponent;
   let fixture: ComponentFixture<OverlayContentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [OverlayContentComponent],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(OverlayContentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
