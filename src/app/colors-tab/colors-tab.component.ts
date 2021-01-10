import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-colors-tab',
  templateUrl: './colors-tab.component.html',
  styleUrls: ['./colors-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorsTabComponent implements OnInit {
  settingsType: string = 'Colors';
  messageDynamic: string = 'Reset Colors Settings';

  constructor(public colorSettingsService: ColorSettingsService, public boxShadowSettingsService: BoxShadowSettingsService) { }

  ngOnInit(): void {
  }

  changeCubeColor($event: ColorEvent) {
    this.colorSettingsService.cubeColor = $event.color.hex;
  }
  changeBackgroundColor($event: ColorEvent) {
    this.colorSettingsService.backgroundColor = $event.color.hex;
  }
  changeBorderColor($event: ColorEvent) {
    this.colorSettingsService.borderColor = $event.color.hex;
  }
  changeBoxShadowColor($event: ColorEvent) {
    this.boxShadowSettingsService.color = $event.color.hex;
  }

}
