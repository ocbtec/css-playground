import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { TransformSettingsService } from '../services/transformSettings.service';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  styleUrls: ['./reset-buttons.component.scss']
})
export class ResetButtonsComponent implements OnInit {
  position: TooltipPosition = 'above';
  showDelay: number = 200;
  hideDelay: number = 200;
  messageDefault: string = 'Reset ALL Settings';
  messageDynamic: string = '';
  settingsType: string = '';

  constructor(private transformSettingsService: TransformSettingsService) { }

  ngOnInit(): void {
    this.settingsType = this.transformSettingsService.settingsType;
    this.messageDynamic = this.transformSettingsService.messageDynamic;
  }

  dynamicReset(event: any) {
    let resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.transformSettingsService.resetTransformSettings();
    }
  }

}
