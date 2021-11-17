import { TestBed } from '@angular/core/testing';

import { GoodReadsService } from './good-reads.service';

describe('GoodReadsService', () => {
  let service: GoodReadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodReadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
