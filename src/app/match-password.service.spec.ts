import { TestBed } from '@angular/core/testing';

import { MatchPasswordService } from './match-password.service';

describe('MatchPasswordService', () => {
  let service: MatchPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
