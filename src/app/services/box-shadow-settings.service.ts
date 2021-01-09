import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class BoxShadowSettingsService {
  settingsType: string = '';
  messageDynamic: string = '';

  items: Slider[] = [];

  offsetXSlider: Slider = {
    label: 'Offset x',
    slider: {
      id: 'offset-x',
      minValue: -300,
      maxValue: 300,
      step: 1,
      currentValue: 0,
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
      currentValue: 0,
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
      currentValue: 0,
      unit: 'px'
    }
  }
  spreadRadius: Slider = {
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
    this.items.push(this.spreadRadius);
  }

  changeOffsetX(value: number) {
    this.offsetXSlider.slider.currentValue = value;
  }
  changeOffsetY(value: number) {
    this.offsetYSlider.slider.currentValue = value;
  }
  changeBlurRadius(value: number) {
    this.blurRadiusSlider.slider.currentValue = value;
  }
  changeSpreadRadius(value: number) {
    this.spreadRadius.slider.currentValue = value;
  }

  resetBoxShadowSettings() {
    this.offsetXSlider.slider.currentValue = 100;
    this.offsetYSlider.slider.currentValue = 0;
    this.blurRadiusSlider.slider.currentValue = 0;
    this.spreadRadius.slider.currentValue = 0;
  }
}
