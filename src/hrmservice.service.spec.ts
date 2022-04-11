import { TestBed } from '@angular/core/testing';

import { HRMServiceService } from './hrmservice.service';

describe('HRMServiceService', () => {
  let service: HRMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HRMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
