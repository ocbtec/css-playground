import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class StartPresetsService {
  selectedPreset = 'vanilla';
  selectedPresetSubject: Subject<string> = new Subject<string>();

  constructor(private colorSettingsService: ColorSettingsService) {
    this.selectedPresetSubject.next(this.selectedPreset);
  }

  setPreset(value: string) {
    this.selectedPreset = value;
    this.selectedPresetSubject.next(this.selectedPreset);
    this.colorSettingsService.setColorPreset(value);
  }
}
