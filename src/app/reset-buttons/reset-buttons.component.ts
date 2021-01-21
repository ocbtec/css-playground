import { Component, Input } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { StartPresetsService } from '../services/start-presets.service';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  styleUrls: ['./reset-buttons.component.scss']
})
export class ResetButtonsComponent {
  @Input() messageDynamic = '';
  @Input() settingsType = '';
  position: TooltipPosition = 'above';
  showDelay = 200;
  hideDelay = 200;
  messageDefault = 'Reset ALL Settings';

  constructor(
    private transformSettingsService: TransformSettingsService,
    private borderSettingsService: BorderSettingsService,
    private boxShadowSettingsService: BoxShadowSettingsService,
    private colorsSettingsService: ColorSettingsService,
    private startPreset: StartPresetsService
  ) { }

  dynamicReset(event: any) {
    const resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.transformSettingsService.resetTransformSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Border') {
      this.borderSettingsService.resetBorderSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Box-Shadow') {
      this.boxShadowSettingsService.resetBoxShadowSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Colors') {
      this.colorsSettingsService.resetAllColorSettings();
    } else if (resetTab === 'all') {
      this.transformSettingsService.resetTransformSettings(this.startPreset.selectedPreset);
      this.borderSettingsService.resetBorderSettings(this.startPreset.selectedPreset);
      this.boxShadowSettingsService.resetBoxShadowSettings(this.startPreset.selectedPreset);
      this.colorsSettingsService.resetAllColorSettings();
    }
  }
}
