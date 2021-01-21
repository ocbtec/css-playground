import { Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';
import { BoxShadowPresetsVanilla, BoxShadowPresetsExperimental } from '../start-presets/start-presets';

@Injectable({
  providedIn: 'root'
})
export class BoxShadowSettingsService {
  items: Slider[] = [];

  boxShadowPresetVanilla = new BoxShadowPresetsVanilla();
  boxShadowPresetExperimental = new BoxShadowPresetsExperimental();

  offsetXSlider: Slider = {
    label: 'Offset x',
    tabType: 'box-shadow',
    id: 'offset-x',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 8,
    unit: 'px'
  };
  offsetXSliderSubject: Subject<Slider> = new Subject<Slider>();

  offsetYSlider: Slider = {
    label: 'Offset y',
    tabType: 'box-shadow',
    id: 'offset-y',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 8,
    unit: 'px'
  };
  offsetYSliderSubject: Subject<Slider> = new Subject<Slider>();

  blurRadiusSlider: Slider = {
    label: 'Blur Radius',
    tabType: 'box-shadow',
    id: 'blur-radius',
    minValue: 0,
    maxValue: 150,
    step: 1,
    currentValue: 5,
    unit: 'px'
  };
  blurRadiusSliderSubject: Subject<Slider> = new Subject<Slider>();

  spreadRadiusSlider: Slider = {
    label: 'Spread Radius',
    tabType: 'box-shadow',
    id: 'spread-radius',
    minValue: -100,
    maxValue: 150,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };
  spreadRadiusSliderSubject: Subject<Slider> = new Subject<Slider>();

  allSliders = combineLatest([
    this.offsetXSliderSubject,
    this.offsetYSliderSubject,
    this.blurRadiusSliderSubject,
    this.spreadRadiusSliderSubject
  ]);

  shadowInsetSwitch!: boolean;
  shadowInsetSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private colorSettingsService: ColorSettingsService) { }

  setValues() {
    this.offsetXSliderSubject.next(this.offsetXSlider);
    this.offsetYSliderSubject.next(this.offsetYSlider);
    this.blurRadiusSliderSubject.next(this.blurRadiusSlider);
    this.spreadRadiusSliderSubject.next(this.spreadRadiusSlider);
    this.shadowInsetSubject.next(this.shadowInsetSwitch);
  }

  initializeBoxShadowSettings() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });
    this.setValues();
  }

  setBoxShadowPreset(preset: string) {
    if (preset === 'vanilla') {
      this.offsetXSlider.currentValue = this.boxShadowPresetVanilla.xOffset;
      this.offsetYSlider.currentValue = this.boxShadowPresetVanilla.yOffset;
      this.blurRadiusSlider.currentValue = this.boxShadowPresetVanilla.blur;
      this.spreadRadiusSlider.currentValue = this.boxShadowPresetVanilla.spread;
      this.shadowInsetSwitch = this.boxShadowPresetVanilla.insetSwitch;
    } else if (preset === 'experimental') {
      this.offsetXSlider.currentValue = this.boxShadowPresetExperimental.xOffset;
      this.offsetYSlider.currentValue = this.boxShadowPresetExperimental.yOffset;
      this.blurRadiusSlider.currentValue = this.boxShadowPresetExperimental.blur;
      this.spreadRadiusSlider.currentValue = this.boxShadowPresetExperimental.spread;
      this.shadowInsetSwitch = this.boxShadowPresetExperimental.insetSwitch;
    }
    this.setValues();
  }

  setOffsetX(value: number) {
    this.offsetXSlider.currentValue = value;
    this.offsetXSliderSubject.next(this.offsetXSlider);
  }
  setOffsetY(value: number) {
    this.offsetYSlider.currentValue = value;
    this.offsetYSliderSubject.next(this.offsetYSlider);
  }
  setBlurRadius(value: number) {
    this.blurRadiusSlider.currentValue = value;
    this.blurRadiusSliderSubject.next(this.blurRadiusSlider);
  }
  setSpreadRadius(value: number) {
    this.spreadRadiusSlider.currentValue = value;
    this.spreadRadiusSliderSubject.next(this.spreadRadiusSlider);
  }

  resetBoxShadowSettings(preset: string) {
    this.setBoxShadowPreset(preset);
    this.colorSettingsService.resetBoxShadowColorSettings();
  }
}
