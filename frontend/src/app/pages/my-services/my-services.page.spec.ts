import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyServicesPage} from './my-services.page';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import decode from 'jwt-decode';
import {AuthModule} from '../../auth/auth.module';
import {AuthService} from '../../auth/auth-service/auth.service';
import {CreateService} from '../../services/create/create.service';
import {SearchService} from '../../services/search/search.service';

describe('MyServicesPage', () => {
   let component: MyServicesPage;
   let fixture: ComponentFixture<MyServicesPage>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [MyServicesPage],
         imports: [HttpClientTestingModule, RouterTestingModule, AuthModule],
         providers: [decode],
         schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(MyServicesPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
