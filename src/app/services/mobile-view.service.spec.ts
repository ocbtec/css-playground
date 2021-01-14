import { TestBed } from '@angular/core/testing';

import { MobileViewService } from './mobile-view.service';

describe('MobileViewService', () => {
  let service: MobileViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
