import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class StartPresetsService {
  selectedPreset = 'vanilla';

  constructor(private colorSettingsService: ColorSettingsService) {
  }

  setPreset(value: string) {
    this.selectedPreset = value;
    this.colorSettingsService.setColorPreset(value);
  }
}
