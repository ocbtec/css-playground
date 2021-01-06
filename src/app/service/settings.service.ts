import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  sizeValue: number = 50;
  transformX: number = 0;
  transformY: number = 0;
  rotateDegree: number = 0;

  constructor() { }

  changeSize(value: number) {
    this.sizeValue = value;
  }

  moveHorizontally(value: number) {
    this.transformX = value;
  }

  moveVertically(value: number) {
    this.transformY = value;
  }

  rotate(value: number) {
    this.rotateDegree = value;
  }
}
