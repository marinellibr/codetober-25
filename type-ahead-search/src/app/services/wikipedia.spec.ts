import { TestBed } from '@angular/core/testing';

import { Wikipedia } from './wikipedia';

describe('Wikipedia', () => {
  let service: Wikipedia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wikipedia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
