import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchbarComponent} from './searchbar.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('SearchbarComponent', () => {
   let component: SearchbarComponent;
   let fixture: ComponentFixture<SearchbarComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [SearchbarComponent],
         imports: [HttpClientTestingModule, RouterTestingModule],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SearchbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
