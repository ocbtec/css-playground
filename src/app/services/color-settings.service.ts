import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor: string = '#ff4081';
  backgroundColor: string = '#ffffff';
  borderColor: string = '#b6ddfd';
  boxShadowColor: string = '#343a60';

  constructor() { }

  resetColorSettings() {
    this.cubeColor = '#ff4081';
    this.backgroundColor = '#ffffff';
    this.borderColor = '#b6ddfd';
    this.boxShadowColor = '#343a60';
  }
}
