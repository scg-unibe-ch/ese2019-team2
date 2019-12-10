import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryPage} from './category.page';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CategoryPage', () => {
   let component: CategoryPage;
   let fixture: ComponentFixture<CategoryPage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [CategoryPage],
         imports: [HttpClientTestingModule, RouterTestingModule],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CategoryPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
