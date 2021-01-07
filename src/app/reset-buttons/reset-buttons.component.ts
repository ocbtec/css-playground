import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { SettingsService } from '../service/settings.service';

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

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsType = this.settingsService.settingsType;
    this.messageDynamic = this.settingsService.messageDynamic;
  }

  dynamicReset(event: any) {
    let resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.settingsService.resetTransformSettings();
    }
  }

}
