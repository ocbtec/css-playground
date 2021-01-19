import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class BorderSettingsService {
  items: Slider[] = [];

  widthSlider: Slider = {
    label: 'Width',
    slider: {
      id: 'width',
      minValue: 0,
      maxValue: 50,
      step: 1,
      currentValue: 2,
      unit: 'px'
    }
  };
  radiusSlider: Slider = {
    label: 'Radius',
    slider: {
      id: 'radius',
      minValue: 0,
      maxValue: 50,
      step: 1,
      currentValue: 0,
      unit: '%'
    }
  };

  borderStyle = 'solid';

  constructor(public colorSettingsService: ColorSettingsService) { }

  initializeSliders() {
    this.items = [];
    this.items.push(this.widthSlider);
    this.items.push(this.radiusSlider);
  }

  resetBorderSettings() {
    this.widthSlider.slider.currentValue = 2;
    this.radiusSlider.slider.currentValue = 0;
    this.borderStyle = 'solid';
    this.colorSettingsService.resetBorderColorSettings();
  }
}
