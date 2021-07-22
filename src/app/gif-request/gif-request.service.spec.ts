import { TestBed } from '@angular/core/testing';

import { GifRequestService } from './gif-request.service';

describe('GifRequestService', () => {
  let service: GifRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
