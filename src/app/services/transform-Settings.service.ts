import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { TransformPresetsVanilla, TransformPresetsExperimental } from '../start-presets/start-presets';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  items: Slider[] = [];
  transformPresetVanilla = new TransformPresetsVanilla();
  transformPresetExperimental = new TransformPresetsExperimental();

  sizeSlider: Slider = {
    label: 'Size',
    tabType: 'transform',
    id: 'size',
    minValue: 10,
    maxValue: 300,
    step: 1,
    currentValue: 100,
    unit: 'px'
  };
  sizeSliderSubject: Subject<Slider> = new Subject<Slider>();

  horizontallySlider: Slider = {
    label: 'Move horizontally',
    tabType: 'transform',
    id: 'hMovement',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };
  horizontallySliderSubject: Subject<Slider> = new Subject<Slider>();

  verticallySlider: Slider = {
    label: 'Move vertically',
    tabType: 'transform',
    id: 'vMovement',
    minValue: -300,
    maxValue: 300,
    step: 1,
    currentValue: 0,
    unit: 'px'
  };
  verticallySliderSubject: Subject<Slider> = new Subject<Slider>();

  rotateSlider: Slider = {
    label: 'Rotate',
    tabType: 'transform',
    id: 'rotate',
    minValue: 0,
    maxValue: 360,
    step: 1,
    currentValue: 0,
    unit: '°'
  };
  rotateSliderSubject: Subject<Slider> = new Subject<Slider>();

  allSliders = combineLatest([
    this.sizeSliderSubject,
    this.horizontallySliderSubject,
    this.verticallySliderSubject,
    this.rotateSliderSubject
  ]);

  transformPreset = '';

  constructor() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });
    this.sizeSliderSubject.next(this.sizeSlider);
    this.horizontallySliderSubject.next(this.horizontallySlider);
    this.verticallySliderSubject.next(this.verticallySlider);
    this.rotateSliderSubject.next(this.rotateSlider);
  }

  setValues() {
    this.sizeSliderSubject.next(this.sizeSlider);
    this.horizontallySliderSubject.next(this.horizontallySlider);
    this.verticallySliderSubject.next(this.verticallySlider);
    this.rotateSliderSubject.next(this.rotateSlider);
  }

  initializeSliders() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });
    this.setValues();
  }

  setTransformPreset(preset: string) {
    if (preset === 'vanilla') {
      this.sizeSlider.currentValue = this.transformPresetVanilla.size;
      this.horizontallySlider.currentValue = this.transformPresetVanilla.hPos;
      this.verticallySlider.currentValue = this.transformPresetVanilla.vPos;
      this.rotateSlider.currentValue = this.transformPresetVanilla.rotate;
    } else if (preset === 'experimental') {
      this.sizeSlider.currentValue = this.transformPresetExperimental.size;
      this.horizontallySlider.currentValue = this.transformPresetExperimental.hPos;
      this.verticallySlider.currentValue = this.transformPresetExperimental.vPos;
      this.rotateSlider.currentValue = this.transformPresetExperimental.rotate;
    }
    this.setValues();
  }

  setSize(value: number) {
    this.sizeSlider.currentValue = value;
    this.sizeSliderSubject.next(this.sizeSlider);
  }
  setXPosition(value: number) {
    this.horizontallySlider.currentValue = value;
    this.horizontallySliderSubject.next(this.horizontallySlider);
  }
  setYPosition(value: number) {
    this.verticallySlider.currentValue = value;
    this.verticallySliderSubject.next(this.verticallySlider);
  }
  setRotation(value: number) {
    this.rotateSlider.currentValue = value;
    this.rotateSliderSubject.next(this.rotateSlider);
  }

  resetTransformSettings(preset: string) {
    this.setTransformPreset(preset);
  }
}
