import { TestBed } from '@angular/core/testing';

import { WithoutsavingGuard } from './withoutsaving.guard';

describe('WithoutsavingGuard', () => {
  let guard: WithoutsavingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithoutsavingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
