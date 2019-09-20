import { TestBed } from '@angular/core/testing';

import { MultimediaServiceService } from './multimedia-service.service';

describe('MultimediaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultimediaServiceService = TestBed.get(MultimediaServiceService);
    expect(service).toBeTruthy();
  });
});
