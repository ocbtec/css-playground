import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class BorderSettingsService {
  settingsType: string = '';
  messageDynamic: string = '';

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
  }
  radiusSlider: Slider = {
    label: 'Radius',
    slider: {
      id:'radius',
      minValue: 0,
      maxValue: 50,
      step: 1,
      currentValue: 0,
      unit: '%'
    }
  }

  constructor() { }

  initializeSizeSlider() {
    this.items.push(this.widthSlider);
  }
  initializeMoveHorizontallySlider() {
    this.items.push(this.radiusSlider);
  }

  changeSize(value: number) {
    this.widthSlider.slider.currentValue = value;
  }
  moveHorizontally(value: number) {
    this.radiusSlider.slider.currentValue = value;
  }

  resetTransformSettings() {
    this.widthSlider.slider.currentValue = 2;
    this.radiusSlider.slider.currentValue = 0;
  }
}
