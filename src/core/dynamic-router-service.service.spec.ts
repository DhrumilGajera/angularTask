import { TestBed } from '@angular/core/testing';

import { DynamicRouterServiceService } from './dynamic-router-service.service';

describe('DynamicRouterServiceService', () => {
  let service: DynamicRouterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicRouterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
