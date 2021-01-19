import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor = '#ff4081';
  cubeColorSubject: Subject<string> = new Subject();

  backgroundColor = '#ffffff';
  backgroundColorSubject: Subject<string> = new Subject();

  borderColor = '#b6ddfd';
  borderColorSubject: Subject<string> = new Subject();

  boxShadowColor = '#343a60';
  boxShadowColorSubject: Subject<string> = new Subject();

  allColors = combineLatest([
    this.cubeColorSubject,
    this.backgroundColorSubject,
    this.borderColorSubject,
    this.boxShadowColorSubject
  ]);

  initializeColors() {
    this.cubeColorSubject.next(this.cubeColor);
    this.backgroundColorSubject.next(this.backgroundColor);
    this.borderColorSubject.next(this.borderColor);
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  setCubeColor(color: string) {
    this.cubeColorSubject.next(color);
  }
  setBackgroundColor(color: string) {
    this.backgroundColorSubject.next(color);
  }
  setBorderColor(color: string) {
    this.borderColorSubject.next(color);
  }
  setBoxShadowColor(color: string) {
    this.boxShadowColorSubject.next(color);
  }

  resetCubeColorSettings() {
    this.cubeColorSubject.next(this.cubeColor);
  }
  resetBackgroundColorSettings() {
    this.backgroundColorSubject.next(this.backgroundColor);
  }
  resetBorderColorSettings() {
    this.borderColorSubject.next(this.borderColor);
  }

  resetBoxShadowColorSettings() {
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  resetAllColorSettings() {
    this.initializeColors();
  }
}
