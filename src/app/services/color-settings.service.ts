import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor = '#ff4081';
  backgroundColor = '#ffffff';

  borderColor = '#b6ddfd';
  borderColorSubject: Subject<string> = new Subject();

  boxShadowColor = '#343a60';
  boxShadowColorSubject: Subject<string> = new Subject();

  initializeColors() {
    this.borderColorSubject.next(this.borderColor);
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  setCubeColor(color: string) {
    this.cubeColor = color;
  }
  setBackgroundColor(color: string) {
    this.backgroundColor = color;
  }
  setBorderColor(color: string) {
    this.borderColorSubject.next(color);
  }
  setBoxShadowColor(color: string) {
    this.boxShadowColorSubject.next(color);
  }

  resetBorderColorSettings() {
    this.borderColorSubject.next(this.borderColor);
  }

  resetBoxShadowColorSettings() {
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  resetAllColorSettings() {
    this.cubeColor = '#ff4081';
    this.backgroundColor = '#ffffff';
    this.borderColorSubject.next(this.borderColor);
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }
}
