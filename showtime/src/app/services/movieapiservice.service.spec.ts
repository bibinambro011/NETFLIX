import { TestBed } from '@angular/core/testing';

import { MovieapiserviceService } from './movieapiservice.service';

describe('MovieapiserviceService', () => {
  let service: MovieapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
