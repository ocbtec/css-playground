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
  cubeColor = '';
  backgroundColor = '';
  borderColor = '';
  boxShadowColor = '';
  colorArray: Array<string> = [];

  size = 0;
  xPos = 0;
  yPos = 0;
  rotate = 0;
  transformArray: Array<number> = [];

  borderWidth = 0;
  borderRadius = 0;
  borderStyle = '';
  borderArray: Array<number> = [];

  shadowX = 0;
  shadowY = 0;
  shadowBlur = 0;
  shadowSpread = 0;
  boxShadowArray: Array<number> = [];
  shadowInset = '';

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
      this.cubeColor = this.colorArray[0];
      this.backgroundColor = this.colorArray[1];
      this.borderColor = this.colorArray[2];
      this.boxShadowColor = this.colorArray[3];
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

    const borderSettings = this.borderSettingsService.allSliders;
    borderSettings.subscribe(settings => {
      this.borderArray = [];
      settings.map(slider => this.borderArray.push(slider.currentValue));
      this.borderWidth = this.borderArray[0];
      this.borderRadius = this.borderArray[1];
    });
    this.borderSettingsService.borderStyleSubject.subscribe(value => this.borderStyle = value);

    const boxShadowSettings = this.boxShadowSettingsService.allSliders;
    boxShadowSettings.subscribe(settings => {
      this.boxShadowArray = [];
      settings.map(slider => this.boxShadowArray.push(slider.currentValue));
      this.shadowX = this.boxShadowArray[0];
      this.shadowY = this.boxShadowArray[1];
      this.shadowBlur = this.boxShadowArray[2];
      this.shadowSpread = this.boxShadowArray[3];
    });
    this.boxShadowSettingsService.shadowInsetSubject.subscribe(value => this.shadowInset = value);
  }
}
