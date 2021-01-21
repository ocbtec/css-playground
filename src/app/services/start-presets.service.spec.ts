import { TestBed } from '@angular/core/testing';

import { StartPresetsService } from './start-presets.service';

describe('StartPresetsService', () => {
  let service: StartPresetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartPresetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
