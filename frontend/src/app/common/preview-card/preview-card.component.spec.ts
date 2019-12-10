import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PreviewCardComponent} from './preview-card.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PreviewCardComponent', () => {
   let component: PreviewCardComponent;
   let fixture: ComponentFixture<PreviewCardComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PreviewCardComponent],
         imports: [RouterTestingModule],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PreviewCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
