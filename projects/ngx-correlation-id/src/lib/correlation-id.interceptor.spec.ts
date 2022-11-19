import { TestBed } from '@angular/core/testing';

import { CorrelationIdInterceptor } from './correlation-id.interceptor';

describe('CorrelationIdInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CorrelationIdInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CorrelationIdInterceptor = TestBed.inject(CorrelationIdInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
