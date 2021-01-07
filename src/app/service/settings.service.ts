import { Injectable } from '@angular/core';
import { Transform } from '../transform-tab/transform.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingsType: string = '';
  messageDynamic: string = '';

  items: Transform[] = [];

  sizeSlider: Transform = {
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
  horizontallySlider: Transform = {
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
  verticallySlider: Transform = {
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
  rotateSlider: Transform = {
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
