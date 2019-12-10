import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

import {SearchService} from './search.service';

describe('SearchService', () => {
   let error: HttpErrorResponse;
   let httpController: HttpTestingController;

   beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
   }));

   it('should be created', () => {
      const service: SearchService = TestBed.get(SearchService);
      error = TestBed.get(HttpClient);
      httpController = TestBed.get(HttpTestingController);
      expect(service).toBeTruthy();
   });
});
