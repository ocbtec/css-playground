import { TestBed } from '@angular/core/testing';

import { TransformSettingsService } from './transform-Settings.service';

describe('SettingsService', () => {
  let service: TransformSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
