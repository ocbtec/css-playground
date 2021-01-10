import { TestBed } from '@angular/core/testing';

import { ColorSettingsService } from './color-settings.service';

describe('ColorSettingsService', () => {
  let service: ColorSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
