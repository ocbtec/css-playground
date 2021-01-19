import { Component } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { TransformSettingsService } from '../services/transform-Settings.service';

@Component({
  selector: 'app-css-code-tab',
  templateUrl: './css-code-tab.component.html',
  styleUrls: ['./css-code-tab.component.scss']
})
export class CssCodeTabComponent {
  borderColor = '';
  boxShadowColor = '';
  colorArray: Array<string> = [];

  size = 0;
  xPos = 0;
  yPos = 0;
  rotate = 0;
  transformArray: Array<number> = [];

  constructor(
    public transformSettingsService: TransformSettingsService,
    public borderSettingsService: BorderSettingsService,
    public boxShadowSettingsService: BoxShadowSettingsService,
    public colorSettingsService: ColorSettingsService
  ) {
    const colors = this.colorSettingsService.allColors;
    colors.subscribe(colorArray => {
      this.colorArray = [];
      colorArray.map(color => this.colorArray.push(color));
      this.borderColor = this.colorArray[0];
      this.boxShadowColor = this.colorArray[1];
    });
    this.colorSettingsService.initializeColors();

    const transformSettings = this.transformSettingsService.allSliders;
    transformSettings.subscribe(settings => {
      this.transformArray = [];
      settings.map(slider => this.transformArray.push(slider.currentValue));
      this.size = this.transformArray[0];
      this.xPos = this.transformArray[1];
      this.yPos = this.transformArray[2];
      this.rotate = this.transformArray[3];
    });
  }
}
