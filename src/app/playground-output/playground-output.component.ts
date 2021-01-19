import { Component } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-playground-output',
  templateUrl: './playground-output.component.html',
  styleUrls: ['./playground-output.component.scss']
})
export class PlaygroundOutputComponent {
  borderColor = '';
  boxShadowColor = '';

  colorArray: Array<string> = [];

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
  }
}
