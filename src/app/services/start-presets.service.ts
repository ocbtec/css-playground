import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BorderSettingsService } from './border-settings.service';
import { BoxShadowSettingsService } from './box-shadow-settings.service';
import { ColorSettingsService } from './color-settings.service';
import { TransformSettingsService } from './transform-Settings.service';

@Injectable({
  providedIn: 'root'
})
export class StartPresetsService {
  selectedPreset = 'vanilla';

  constructor(
    private colorSettingsService: ColorSettingsService,
    private borderSettingsService: BorderSettingsService,
    private transformSettingsService: TransformSettingsService,
    private boxShadowSettingsService: BoxShadowSettingsService
  ) {
  }

  setPreset(value: string) {
    this.selectedPreset = value;
    this.colorSettingsService.setColorPreset(value);
    this.borderSettingsService.setBorderPreset(value);
    this.transformSettingsService.setTransformPreset(value);
    this.boxShadowSettingsService.setBoxShadowPreset(value);
  }
}
