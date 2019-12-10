import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import {AuthService} from './auth.service';

describe('AuthService', () => {
   let error: HttpErrorResponse;
   let httpController: HttpTestingController;

   beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
   })
   );

   it('should be created', () => {
      const service: AuthService = TestBed.get(AuthService);
      error = TestBed.get(HttpClient);
      httpController = TestBed.get(HttpTestingController);
      expect(service).toBeTruthy();
   });
});
