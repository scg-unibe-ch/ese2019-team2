import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePage} from './profile.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProfilePage', () => {
   let component: ProfilePage;
   let fixture: ComponentFixture<ProfilePage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ProfilePage],
         imports: [HttpClientTestingModule, RouterTestingModule],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ProfilePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
