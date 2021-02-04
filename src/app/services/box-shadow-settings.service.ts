import { Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';
import { RandomBoxShadowPreset } from '../start-presets/start-presets';
import { MobileViewService } from './mobile-view.service';
import * as presets from '../start-presets/presets.json';

@Injectable({
  providedIn: 'root'
})
export class BoxShadowSettingsService {
  items: Slider[] = [];

  randomBoxShadowPreset = new RandomBoxShadowPreset();

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

  onMobile = false;
  currentPreset = 'vanilla';
  currentPresetSubject = new Subject<string>();

  constructor(
    private colorSettingsService: ColorSettingsService,
    mobileViewService: MobileViewService
  ) {
    this.currentPresetSubject.subscribe(preset => {
      this.currentPreset = preset;
    });

    mobileViewService.onMobileDeviceSubject.subscribe(onMobile => {
      this.onMobile = onMobile;
      const sliderArray = [this.offsetXSlider, this.offsetYSlider];
      if (this.onMobile) {
        sliderArray.map(slider => {
          if (slider.currentValue === 167) { slider.currentValue = 113; }
          if (slider.currentValue === -167) { slider.currentValue = -113; }
          if (slider.currentValue > 200) { slider.currentValue = 200; }
          if (slider.currentValue < -200) { slider.currentValue = -200; }
        });
        this.offsetXSlider.minValue = -200;
        this.offsetXSlider.maxValue = 200;
        this.offsetYSlider.minValue = -200;
        this.offsetYSlider.maxValue = 200;
      } else {
        sliderArray.map(slider => {
          if (slider.currentValue === 113) { slider.currentValue = 167; }
          if (slider.currentValue === -113) { slider.currentValue = -167; }
        });
        this.offsetXSlider.minValue = -300;
        this.offsetXSlider.maxValue = 300;
        this.offsetYSlider.minValue = -300;
        this.offsetYSlider.maxValue = 300;
      }
      this.setValues();
    });

    mobileViewService.checkPlaygroundHeight();
  }

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
    this.currentPresetSubject.next(preset);
    if (preset === 'vanilla') {
      this.offsetXSlider.currentValue = presets.vanillaBoxShadow.xOffset;
      this.offsetYSlider.currentValue = presets.vanillaBoxShadow.yOffset;
      this.blurRadiusSlider.currentValue = presets.vanillaBoxShadow.blur;
      this.spreadRadiusSlider.currentValue = presets.vanillaBoxShadow.spread;
      this.shadowInsetSwitch = presets.vanillaBoxShadow.insetSwitch;
    } else if (preset === 'experimental') {
      this.offsetXSlider.currentValue = presets.experimentalBoxShadow.xOffset;
      this.offsetYSlider.currentValue = presets.experimentalBoxShadow.yOffset;
      this.blurRadiusSlider.currentValue = presets.experimentalBoxShadow.blur;
      this.spreadRadiusSlider.currentValue = presets.experimentalBoxShadow.spread;
      this.shadowInsetSwitch = presets.experimentalBoxShadow.insetSwitch;
      if (this.onMobile) {
        this.offsetXSlider.currentValue = -113;
        this.offsetYSlider.currentValue = 113;
      }
    } else if (preset === 'random') {
      this.offsetXSlider.currentValue = this.randomBoxShadowPreset.randomOffsetX();
      this.offsetYSlider.currentValue = this.randomBoxShadowPreset.randomOffsetY();
      this.blurRadiusSlider.currentValue = this.randomBoxShadowPreset.randomBlur();
      this.spreadRadiusSlider.currentValue = this.randomBoxShadowPreset.randomSpread();
      this.shadowInsetSwitch = this.randomBoxShadowPreset.randomInset();
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
    this.colorSettingsService.resetBoxShadowColorSettings(preset);
  }
}
