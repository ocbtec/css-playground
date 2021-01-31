import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { RandomColorPreset } from '../start-presets/start-presets';
import * as presets from '../start-presets/presets.json';



@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor!: string;
  backgroundColor!: string;
  borderColor!: string;
  boxShadowColor!: string;
  cubeColorSubject: Subject<string> = new Subject();
  backgroundColorSubject: Subject<string> = new Subject();
  borderColorSubject: Subject<string> = new Subject();
  boxShadowColorSubject: Subject<string> = new Subject();

  randomColorPreset = new RandomColorPreset();

  allColors = combineLatest([
    this.cubeColorSubject,
    this.backgroundColorSubject,
    this.borderColorSubject,
    this.boxShadowColorSubject
  ]);

  constructor() {
    this.setColorPreset('vanilla');
  }

  setValues() {
    this.cubeColorSubject.next(this.cubeColor);
    this.backgroundColorSubject.next(this.backgroundColor);
    this.borderColorSubject.next(this.borderColor);
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  initializeColors() {
    this.setValues();
  }

  setColorPreset(preset: string) {
    if (preset === 'vanilla') {
      this.cubeColor = presets.vanilla.cubeColor;
      this.backgroundColor = presets.vanilla.backgroundColor;
      this.borderColor = presets.vanilla.borderColor;
      this.boxShadowColor = presets.vanilla.boxShadowColor;
    } else if (preset === 'experimental') {
      this.cubeColor = presets.experimental.cubeColor;
      this.backgroundColor = presets.experimental.backgroundColor;
      this.borderColor = presets.experimental.borderColor;
      this.boxShadowColor = presets.experimental.boxShadowColor;
    } else if (preset === 'random') {
      this.cubeColor = this.randomColorPreset.randomCubeColor();
      this.backgroundColor = this.randomColorPreset.randomBackgroundColor();
      this.borderColor = this.randomColorPreset.randomBorderColor();
      this.boxShadowColor = this.randomColorPreset.randomBoxShadowColor();
    }
    this.setValues();
  }

  setBorderColorPreset(preset: string) {
    if (preset === 'vanilla') {
      this.borderColor = presets.vanilla.borderColor;
    } else if (preset === 'experimental') {
      this.borderColor = presets.experimental.borderColor;
    } else if (preset === 'random') {
      this.borderColor = this.randomColorPreset.randomBorderColor();
    }
    this.setValues();
  }

  setBoxShadowColorPreset(preset: string) {
    if (preset === 'vanilla') {
      this.boxShadowColor = presets.vanilla.boxShadowColor;
    } else if (preset === 'experimental') {
      this.boxShadowColor = presets.experimental.boxShadowColor;
    } else if (preset === 'random') {
      this.boxShadowColor = this.randomColorPreset.randomBoxShadowColor();
    }
    this.setValues();
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
  resetBorderColorSettings(preset: string) {
    this.setBorderColorPreset(preset);
  }

  resetBoxShadowColorSettings(preset: string) {
    this.setBoxShadowColorPreset(preset);
  }

  resetAllColorSettings(preset: string) {
    this.setColorPreset(preset);
  }
}
