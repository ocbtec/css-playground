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
      this.cubeColor = presets.vanillaColor.cubeColor;
      this.backgroundColor = presets.vanillaColor.backgroundColor;
      this.borderColor = presets.vanillaColor.borderColor;
      this.boxShadowColor = presets.vanillaColor.boxShadowColor;
    } else if (preset === 'experimental') {
      this.cubeColor = presets.experimentalColor.cubeColor;
      this.backgroundColor = presets.experimentalColor.backgroundColor;
      this.borderColor = presets.experimentalColor.borderColor;
      this.boxShadowColor = presets.experimentalColor.boxShadowColor;
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
      this.borderColor = presets.vanillaColor.borderColor;
    } else if (preset === 'experimental') {
      this.borderColor = presets.experimentalColor.borderColor;
    } else if (preset === 'random') {
      this.borderColor = this.randomColorPreset.randomBorderColor();
    }
    this.setValues();
  }

  setBoxShadowColorPreset(preset: string) {
    if (preset === 'vanilla') {
      this.boxShadowColor = presets.vanillaColor.boxShadowColor;
    } else if (preset === 'experimental') {
      this.boxShadowColor = presets.experimentalColor.boxShadowColor;
    } else if (preset === 'random') {
      this.boxShadowColor = this.randomColorPreset.randomBoxShadowColor();
    }
    this.setValues();
  }

  setCubeColor(color: string) {
    this.cubeColor = color;
    this.cubeColorSubject.next(color);
  }
  setBackgroundColor(color: string) {
    this.backgroundColor = color;
    this.backgroundColorSubject.next(color);
  }
  setBorderColor(color: string) {
    this.borderColor = color;
    this.borderColorSubject.next(color);
  }
  setBoxShadowColor(color: string) {
    this.boxShadowColor = color;
    this.boxShadowColorSubject.next(color);
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
