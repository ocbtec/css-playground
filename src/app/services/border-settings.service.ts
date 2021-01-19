import { Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { ColorSettingsService } from './color-settings.service';

@Injectable({
  providedIn: 'root'
})
export class BorderSettingsService {
  items: Slider[] = [];

  widthSlider: Slider = {
    label: 'Width',
    tabType: 'border',
    id: 'width',
    minValue: 0,
    maxValue: 50,
    step: 1,
    currentValue: 2,
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

  constructor(private colorSettingsService: ColorSettingsService) { }

  initializeBorderSettings() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });

    this.widthSlider.currentValue = 2;
    this.radiusSlider.currentValue = 0;
    this.borderStyle = 'solid';

    this.widthSliderSubject.next(this.widthSlider);
    this.radiusSliderSubject.next(this.radiusSlider);
    this.borderStyleSubject.next(this.borderStyle);
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

  resetBorderSettings() {
    this.initializeBorderSettings();
    this.colorSettingsService.resetBorderColorSettings();
  }
}
