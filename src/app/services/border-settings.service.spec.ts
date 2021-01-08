import { TestBed } from '@angular/core/testing';

import { BorderSettingsService } from './border-settings.service';

describe('BorderSettingsService', () => {
  let service: BorderSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorderSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
