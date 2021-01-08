import { Component, Input, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BorderSettingsService } from '../services/border-settings.service';

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
    private borderSettingsService: BorderSettingsService
  ) { }

  ngOnInit(): void { }

  dynamicReset(event: any) {
    let resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.transformSettingsService.resetTransformSettings();
    } else if (resetTab === 'Border') {
      this.borderSettingsService.resetTransformSettings();
    } else if (resetTab === 'all') {
      this.transformSettingsService.resetTransformSettings();
      this.borderSettingsService.resetTransformSettings();
    }
  }

}
