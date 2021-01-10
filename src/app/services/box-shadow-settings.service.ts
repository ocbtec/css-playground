import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class BoxShadowSettingsService {
  items: Slider[] = [];

  offsetXSlider: Slider = {
    label: 'Offset x',
    slider: {
      id: 'offset-x',
      minValue: -300,
      maxValue: 300,
      step: 1,
      currentValue: 5,
      unit: 'px'
    }
  }
  offsetYSlider: Slider = {
    label: 'Offset y',
    slider: {
      id:'offset-y',
      minValue: -300,
      maxValue: 300,
      step: 1,
      currentValue: 5,
      unit: 'px'
    }
  }
  blurRadiusSlider: Slider = {
    label: 'Blur Radius',
    slider: {
      id: 'blur-radius',
      minValue: 0,
      maxValue: 150,
      step: 1,
      currentValue: 5,
      unit: 'px'
    }
  }
  spreadRadiusSlider: Slider = {
    label: 'Spread Radius',
    slider: {
      id:'spread-radius',
      minValue: -100,
      maxValue: 150,
      step: 1,
      currentValue: 0,
      unit: 'px'
    }
  }

  shadowInset: string = '';
  shadowInsetSwitch: boolean = false;
  color: string = '#343a60';

  constructor() { }

  initializeOffsetXSlider() {
    this.items.push(this.offsetXSlider);
  }

  initializeOffsetYSlider() {
    this.items.push(this.offsetYSlider);
  }

  initializeBlurRadiusSlider() {
    this.items.push(this.blurRadiusSlider);
  }

  initializeSpreadRadiusSlider() {
    this.items.push(this.spreadRadiusSlider);
  }

  resetBoxShadowSettings() {
    this.offsetXSlider.slider.currentValue = 5;
    this.offsetYSlider.slider.currentValue = 5;
    this.blurRadiusSlider.slider.currentValue = 5;
    this.spreadRadiusSlider.slider.currentValue = 0;
    this.shadowInsetSwitch = false;
    this.shadowInset = '';
    this.color = '#343a60';
  }
}
