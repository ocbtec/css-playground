import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class BoxShadowSettingsService {
  items: Slider[] = [];

  offsetXSlider: Slider = {
    label: 'Offset x',
    tabType: 'box-shadow',
    id: 'offset-x',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 5,
    unit: 'px'
  };
  offsetYSlider: Slider = {
    label: 'Offset y',
    tabType: 'box-shadow',
    id: 'offset-y',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 5,
    unit: 'px'
  };
  blurRadiusSlider: Slider = {
    label: 'Blur Radius',
    tabType: 'box-shadow',
    id: 'blur-radius',
    minValue: 0,
    maxValue: 150,
    step: 1,
    currentValue: 5,
    unit: 'px'
  };
  spreadRadiusSlider: Slider = {
    label: 'Spread Radius',
    tabType: 'box-shadow',
    id: 'spread-radius',
    minValue: -100,
    maxValue: 150,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };

  shadowInset = '';
  shadowInsetSwitch = false;
  boxShadowColor = '#343a60';

  constructor(public colorSettingsService: ColorSettingsService) { }

  initializeSliders() {
    this.items = [];
    this.items.push(this.offsetXSlider);
    this.items.push(this.offsetYSlider);
    this.items.push(this.blurRadiusSlider);
    this.items.push(this.spreadRadiusSlider);
  }

  resetBoxShadowSettings() {
    this.offsetXSlider.currentValue = 5;
    this.offsetYSlider.currentValue = 5;
    this.blurRadiusSlider.currentValue = 5;
    this.spreadRadiusSlider.currentValue = 0;
    this.shadowInsetSwitch = false;
    this.shadowInset = '';
    this.colorSettingsService.resetBoxShadowColorSettings();
  }
}
