import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor = '#ff4081';
  backgroundColor = '#ffffff';
  borderColor = '#b6ddfd';
  boxShadowColor = '#343a60';

  resetColorSettings() {
    this.cubeColor = '#ff4081';
    this.backgroundColor = '#ffffff';
    this.borderColor = '#b6ddfd';
    this.boxShadowColor = '#343a60';
  }
}
