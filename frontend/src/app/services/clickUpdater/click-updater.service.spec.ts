import { TestBed } from '@angular/core/testing';

import { ClickUpdaterService } from './click-updater.service';

describe('ClickUpdaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickUpdaterService = TestBed.get(ClickUpdaterService);
    expect(service).toBeTruthy();
  });
});
