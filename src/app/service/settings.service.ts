import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  sizeValue: number = 50;

  constructor() { }

  changeSize(value: number) {
    this.sizeValue = value;
  }
}
