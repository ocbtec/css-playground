import { TestBed } from '@angular/core/testing';

import { BoxShadowSettingsService } from './box-shadow-settings.service';

describe('BoxShadowSettingsService', () => {
  let service: BoxShadowSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxShadowSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
