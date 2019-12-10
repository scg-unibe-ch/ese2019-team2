import {TestBed} from '@angular/core/testing';

import {RequestService} from './request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('RequestService', () => {
   beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
   }));

   it('should be created', () => {
      const service: RequestService = TestBed.get(RequestService);
      expect(service).toBeTruthy();
   });
});
