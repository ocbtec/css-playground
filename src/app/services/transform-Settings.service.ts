import { Injectable } from '@angular/core';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  settingsType: string = '';
  messageDynamic: string = '';

  items: Slider[] = [];

  sizeSlider: Slider = {
    label: 'Size',
    slider: {
      id: 'size',
      minValue: 10,
      maxValue: 300,
      step: 1,
      currentValue: 100,
      unit: 'px'
    }
  }
  horizontallySlider: Slider = {
    label: 'Move horizontally',
    slider: {
      id:'hMovement',
      minValue: -300,
      maxValue: 300,
      step: 1,
      currentValue: 0,
      unit: 'px'
    }
  }
  verticallySlider: Slider = {
    label: 'Move vertically',
    slider: {
      id: 'vMovement',
      minValue: -300,
      maxValue: 300,
      step: 1,
      currentValue: 0,
      unit: 'px'
    }
  }
  rotateSlider: Slider = {
    label: 'Rotate',
    slider: {
      id:'rotate',
      minValue: 0,
      maxValue: 360,
      step: 1,
      currentValue: 0,
      unit: '°'
    }
  }

  constructor() { }

  initializeSizeSlider() {
    this.items.push(this.sizeSlider);
  }

  initializeMoveHorizontallySlider() {
    this.items.push(this.horizontallySlider);
  }

  initializeMoveVerticallySlider() {
    this.items.push(this.verticallySlider);
  }

  initializeMoveRotateSlider() {
    this.items.push(this.rotateSlider);
  }

  changeSize(value: number) {
    this.sizeSlider.slider.currentValue = value;
  }
  moveHorizontally(value: number) {
    this.horizontallySlider.slider.currentValue = value;
  }
  moveVertically(value: number) {
    this.verticallySlider.slider.currentValue = value;
  }
  rotate(value: number) {
    this.rotateSlider.slider.currentValue = value;
  }

  resetTransformSettings() {
    this.sizeSlider.slider.currentValue = 100;
    this.horizontallySlider.slider.currentValue = 0;
    this.verticallySlider.slider.currentValue = 0;
    this.rotateSlider.slider.currentValue = 0;
  }
}
