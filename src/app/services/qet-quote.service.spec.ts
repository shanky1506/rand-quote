import { TestBed } from '@angular/core/testing';

import { QetQuoteService } from './qet-quote.service';

describe('QetQuoteService', () => {
  let service: QetQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QetQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
