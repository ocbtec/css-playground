import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  items: Slider[] = [];

  sizeSlider: Slider = {
    label: 'Size',
    tabType: 'transform',
    id: 'size',
    minValue: 10,
    maxValue: 300,
    step: 1,
    currentValue: 100,
    unit: 'px'
  };
  horizontallySlider: Slider = {
    label: 'Move horizontally',
    tabType: 'transform',
    id: 'hMovement',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };
  verticallySlider: Slider = {
    label: 'Move vertically',
    tabType: 'transform',
    id: 'vMovement',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };
  rotateSlider: Slider = {
    label: 'Rotate',
    tabType: 'transform',
    id: 'rotate',
    minValue: 0,
    maxValue: 360,
    step: 1,
    currentValue: 0,
    unit: '°'
  };

  initializeSliders() {
    this.items = [];
    this.items.push(this.sizeSlider);
    this.items.push(this.horizontallySlider);
    this.items.push(this.verticallySlider);
    this.items.push(this.rotateSlider);
  }

  resetTransformSettings() {
    this.sizeSlider.currentValue = 100;
    this.horizontallySlider.currentValue = 0;
    this.verticallySlider.currentValue = 0;
    this.rotateSlider.currentValue = 0;
  }
}
