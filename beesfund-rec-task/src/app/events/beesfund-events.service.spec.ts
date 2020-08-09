import { TestBed } from '@angular/core/testing';

import { BeesfundEventsService } from './beesfund-events.service';

describe('BeesfundEventsService', () => {
  let service: BeesfundEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeesfundEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
