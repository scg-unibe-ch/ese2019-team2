import { TestBed } from '@angular/core/testing';

import { DeleteService } from './delete.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DeleteService = TestBed.get(DeleteService);
    expect(service).toBeTruthy();
  });
});
