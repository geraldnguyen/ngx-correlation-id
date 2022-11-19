import { TestBed } from '@angular/core/testing';

import { NgxCorrelationIdService } from './ngx-correlation-id.service';

describe('NgxCorrelationIdService', () => {
  let service: NgxCorrelationIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCorrelationIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
