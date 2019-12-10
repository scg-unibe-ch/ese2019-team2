import {TestBed} from '@angular/core/testing';

import {RoleGuardService} from './roleguard.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('RoleGuardService', () => {
   beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RoleGuardService]
   }));

   it('should be created', () => {
      const service: RoleGuardService = TestBed.get(RoleGuardService);
      expect(service).toBeTruthy();
   });
});
