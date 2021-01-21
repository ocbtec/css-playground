import { Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';
import { BorderPresetsVanilla, BorderPresetsExperimental, BorderPresetsRandom } from '../start-presets/start-presets';

@Injectable({
  providedIn: 'root'
})
export class BorderSettingsService {
  items: Slider[] = [];
  borderPresetVanilla = new BorderPresetsVanilla();
  borderPresetExperimental = new BorderPresetsExperimental();
  borderPresetRandom = new BorderPresetsRandom();

  widthSlider: Slider = {
    label: 'Width',
    tabType: 'border',
    id: 'width',
    minValue: 0,
    maxValue: 50,
    step: 1,
    currentValue: 4,
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
    currentValue: 0,
    unit: '%'
  };
  radiusSliderSubject: Subject<Slider> = new Subject<Slider>();

  borderStyle = '';
  borderStyleSubject: Subject<string> = new Subject<string>();

  allSliders = combineLatest([
    this.widthSliderSubject,
    this.radiusSliderSubject,
  ]);

  constructor(private colorSettingsService: ColorSettingsService) {
    this.widthSlider.currentValue = this.borderPresetVanilla.width;
    this.radiusSlider.currentValue = this.borderPresetVanilla.radius;
    this.borderStyle = this.borderPresetVanilla.style;
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
    if (preset === 'vanilla') {
      this.widthSlider.currentValue = this.borderPresetVanilla.width;
      this.radiusSlider.currentValue = this.borderPresetVanilla.radius;
      this.borderStyle = this.borderPresetVanilla.style;
    } else if (preset === 'experimental') {
      this.widthSlider.currentValue = this.borderPresetExperimental.width;
      this.radiusSlider.currentValue = this.borderPresetExperimental.radius;
      this.borderStyle = this.borderPresetExperimental.style;
    } else if (preset === 'random') {
      this.widthSlider.currentValue = this.borderPresetRandom.randomWidth();
      this.radiusSlider.currentValue = this.borderPresetRandom.randomRadius();
      this.borderStyle = this.borderPresetRandom.randomStyle();
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
    this.colorSettingsService.resetBorderColorSettings();
  }
}
