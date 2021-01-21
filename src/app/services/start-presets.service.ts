import { Injectable } from '@angular/core';
import { BorderSettingsService } from './border-settings.service';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class StartPresetsService {
  selectedPreset = 'vanilla';

  constructor(
    private colorSettingsService: ColorSettingsService,
    private borderSettingsService: BorderSettingsService
  ) {
  }

  setPreset(value: string) {
    this.selectedPreset = value;
    this.colorSettingsService.setColorPreset(value);
    this.borderSettingsService.setBorderPreset(value);
  }
}
