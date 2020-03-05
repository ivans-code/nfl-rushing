import { TestBed } from '@angular/core/testing';

import { NflStatsApiService } from './nfl-stats-api.service';

describe('NflStatsApiService', () => {
  let service: NflStatsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NflStatsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
