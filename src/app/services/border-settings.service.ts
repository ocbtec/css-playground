import { Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';
import { RandomBorderPreset } from '../start-presets/start-presets';
import { MobileViewService } from './mobile-view.service';
import * as presets from '../start-presets/presets.json';

@Injectable({
  providedIn: 'root'
})
export class BorderSettingsService {
  items: Slider[] = [];
  preset = presets.vanillaBorder;

  randomBorderPreset = new RandomBorderPreset();

  widthSlider: Slider = {
    label: 'Width',
    tabType: 'border',
    id: 'width',
    minValue: 0,
    maxValue: 50,
    step: 1,
    currentValue: this.preset.width,
    unit: 'px'
  };
  widthSliderSubject: Subject<Slider> = new Subject<Slider>();

  radiusSlider: Slider = {
    label: 'Radius',
    tabType: 'border',
    id: 'radius',
    minValue: 0,
    maxValue: 50,
    step: 1,
    currentValue: this.preset.radius,
    unit: '%'
  };
  radiusSliderSubject: Subject<Slider> = new Subject<Slider>();

  borderStyle = this.preset.style;
  borderStyleSubject: Subject<string> = new Subject<string>();

  allSliders = combineLatest([
    this.widthSliderSubject,
    this.radiusSliderSubject,
  ]);

  onMobile = false;
  currentPreset = 'vanilla';
  currentPresetSubject = new Subject<string>();

  constructor(
    private colorSettingsService: ColorSettingsService,
    mobileViewService: MobileViewService
  ) {

    mobileViewService.onMobileDeviceSubject.subscribe(onMobile => {
      this.onMobile = onMobile;
      if (this.onMobile && this.currentPreset === 'experimental') {
        this.widthSlider.currentValue = 13;
      } else if (!this.onMobile && this.currentPreset === 'experimental') {
        this.widthSlider.currentValue = 26;
      }
      this.setValues();
    });

    mobileViewService.checkPlaygroundHeight();

    this.currentPresetSubject.subscribe(preset => {
      this.currentPreset = preset;
    });

    this.setBorderPreset('vanilla');
  }

  setValues() {
    this.widthSliderSubject.next(this.widthSlider);
    this.radiusSliderSubject.next(this.radiusSlider);
    this.borderStyleSubject.next(this.borderStyle);
  }

  initializeBorderSettings() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });
    this.setValues();
  }

  setBorderPreset(preset: string) {
    this.currentPresetSubject.next(preset);
    if (preset === 'vanilla') {
      this.widthSlider.currentValue = presets.vanillaBorder.width;
      this.radiusSlider.currentValue = presets.vanillaBorder.radius;
      this.borderStyle = presets.vanillaBorder.style;
    } else if (preset === 'experimental') {
      this.widthSlider.currentValue = presets.experimentalBorder.width;
      this.radiusSlider.currentValue = presets.experimentalBorder.radius;
      this.borderStyle = presets.experimentalBorder.style;
      if (this.onMobile) {
        this.widthSlider.currentValue = 13;
      }
    } else if (preset === 'random') {
      this.widthSlider.currentValue = this.randomBorderPreset.randomWidth();
      this.radiusSlider.currentValue = this.randomBorderPreset.randomRadius();
      this.borderStyle = this.randomBorderPreset.randomStyle();
    }
    this.setValues();
  }

  setWidth(value: number) {
    this.widthSlider.currentValue = value;
    this.widthSliderSubject.next(this.widthSlider);
  }
  setRadius(value: number) {
    this.radiusSlider.currentValue = value;
    this.radiusSliderSubject.next(this.radiusSlider);
  }
  setStyle(value: string) {
    this.borderStyle = value;
    this.borderStyleSubject.next(this.borderStyle);
  }

  resetBorderSettings(preset: string) {
    this.setBorderPreset(preset);
    this.colorSettingsService.resetBorderColorSettings(preset);
  }
}
