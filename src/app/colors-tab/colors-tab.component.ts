import { Component, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-colors-tab',
  templateUrl: './colors-tab.component.html',
  styleUrls: ['./colors-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorsTabComponent {
  settingsType = 'Colors';
  messageDynamic = 'Reset Colors Settings';

  cubeColor = '';
  backgroundColor = '';
  borderColor = '';
  boxShadowColor = '';

  colorArray: Array<string> = [];

  constructor(
    public colorSettingsService: ColorSettingsService,
    public boxShadowSettingsService: BoxShadowSettingsService,
    public mobileViewService: MobileViewService
  ) {
    const colors = this.colorSettingsService.allColors;
    colors.subscribe(colorArray => {
      this.colorArray = [];
      colorArray.map(color => this.colorArray.push(color));
      this.cubeColor = this.colorArray[0];
      this.backgroundColor = this.colorArray[1];
      this.borderColor = this.colorArray[2];
      this.boxShadowColor = this.colorArray[3];
    });
  }

  changeCubeColor($event: ColorEvent) {
    this.colorSettingsService.setCubeColor($event.color.hex);
  }
  changeBackgroundColor($event: ColorEvent) {
    this.colorSettingsService.setBackgroundColor($event.color.hex);
  }
  changeBorderColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }
  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }
}
