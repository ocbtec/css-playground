import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { ColorPresetsVanilla, ColorPresetsExperimental } from '../start-presets/start-presets';
import { StartPresetsService } from './start-presets.service';

@Injectable({
  providedIn: 'root'
})
export class ColorSettingsService {
  cubeColor: string;
  backgroundColor: string;
  borderColor: string;
  boxShadowColor: string;
  cubeColorSubject: Subject<string> = new Subject();
  backgroundColorSubject: Subject<string> = new Subject();
  borderColorSubject: Subject<string> = new Subject();
  boxShadowColorSubject: Subject<string> = new Subject();

  colorPresetVanilla = new ColorPresetsVanilla();
  colorPresetExperimental = new ColorPresetsExperimental();

  allColors = combineLatest([
    this.cubeColorSubject,
    this.backgroundColorSubject,
    this.borderColorSubject,
    this.boxShadowColorSubject
  ]);

  constructor() {
    this.cubeColor = this.colorPresetVanilla.cubeColor;
    this.backgroundColor = this.colorPresetVanilla.backgroundColor;
    this.borderColor = this.colorPresetVanilla.borderColor;
    this.boxShadowColor = this.colorPresetVanilla.boxShadowColor;
  }

  initializeColors() {
    this.cubeColorSubject.next(this.cubeColor);
    this.backgroundColorSubject.next(this.backgroundColor);
    this.borderColorSubject.next(this.borderColor);
    this.boxShadowColorSubject.next(this.boxShadowColor);
  }

  setColorPreset(preset: string) {
    if (preset === 'vanilla') {
      console.log(preset);
      this.cubeColor = this.colorPresetVanilla.cubeColor;
      this.backgroundColor = this.colorPresetVanilla.backgroundColor;
      this.borderColor = this.colorPresetVanilla.borderColor;
      this.boxShadowColor = this.colorPresetVanilla.boxShadowColor;
    } else if (preset === 'experimental') {
      console.log(preset);
      this.cubeColor = this.colorPresetExperimental.cubeColor;
      this.backgroundColor = this.colorPresetExperimental.backgroundColor;
      this.borderColor = this.colorPresetExperimental.borderColor;
      this.boxShadowColor = this.colorPresetExperimental.boxShadowColor;
    }
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
