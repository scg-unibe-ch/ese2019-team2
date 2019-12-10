import {TestBed} from '@angular/core/testing';

import {CreateService} from './create.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreateService', () => {
   beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
   }));

   it('should be created', () => {
      const service: CreateService = TestBed.get(CreateService);
      expect(service).toBeTruthy();
   });
});
