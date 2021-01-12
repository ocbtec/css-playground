import { Component, Input, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  styleUrls: ['./reset-buttons.component.scss']
})
export class ResetButtonsComponent implements OnInit {
  @Input() messageDynamic: string = '';
  @Input() settingsType: string = '';
  position: TooltipPosition = 'above';
  showDelay: number = 200;
  hideDelay: number = 200;
  messageDefault: string = 'Reset ALL Settings';

  constructor(
    private transformSettingsService: TransformSettingsService,
    private borderSettingsService: BorderSettingsService,
    private boxShadowSettingsService: BoxShadowSettingsService,
    private colorsSettingsService: ColorSettingsService
  ) { }

  ngOnInit(): void { }

  dynamicReset(event: any) {
    const resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.transformSettingsService.resetTransformSettings();
    } else if (resetTab === 'Border') {
      this.borderSettingsService.resetBorderSettings();
    } else if (resetTab === 'Box-Shadow') {
      this.boxShadowSettingsService.resetBoxShadowSettings();
    } else if (resetTab === 'Colors') {
      this.colorsSettingsService.resetColorSettings();
    }
      else if (resetTab === 'all') {
      this.transformSettingsService.resetTransformSettings();
      this.borderSettingsService.resetBorderSettings();
      this.boxShadowSettingsService.resetBoxShadowSettings();
      this.colorsSettingsService.resetColorSettings();
    }
  }

}
