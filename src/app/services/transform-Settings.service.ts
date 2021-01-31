import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { RandomTransformPreset } from '../start-presets/start-presets';
import { MobileViewService } from './mobile-view.service';
import * as presets from '../start-presets/presets.json';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  items: Slider[] = [];

  randomTransformPresets = new RandomTransformPreset();

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

  onMobile = false;
  currentPreset = 'vanilla';
  currentPresetSubject = new Subject<string>();

  constructor(mobileViewService: MobileViewService) {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });

    mobileViewService.setPlaygroundHeight();

    this.currentPresetSubject.subscribe(preset => {
      this.currentPreset = preset;
    });

    mobileViewService.onMobileDeviceSubject.subscribe(onMobile => {
      this.onMobile = onMobile;
      if (this.onMobile) {
        const sliderArrayOfThree = [this.sizeSlider, this.horizontallySlider, this.verticallySlider];
        sliderArrayOfThree.map(slider => {
          if (slider.currentValue > 150) { slider.currentValue = 150; }
        });

        const sliderArrayOfTwo = [this.horizontallySlider, this.verticallySlider];
        sliderArrayOfTwo.map(slider => {
          if (slider.currentValue < -150) { slider.currentValue = -150; }
        });

        if (this.sizeSlider.currentValue === 100) {
          this.sizeSlider.currentValue = 50;
        }

        this.sizeSlider.maxValue = 150;
        this.horizontallySlider.minValue = -150;
        this.horizontallySlider.maxValue = 150;
        this.verticallySlider.minValue = -150;
        this.verticallySlider.maxValue = 150;
      } else {
        if (this.currentPreset === 'vanilla' && this.sizeSlider.currentValue === 50) {
          this.sizeSlider.currentValue = 100;
        } else if (this.currentPreset === 'experimental' && this.sizeSlider.currentValue === 150) {
          this.sizeSlider.currentValue = 300;
        }
        this.sizeSlider.maxValue = 300;
        this.horizontallySlider.minValue = -300;
        this.horizontallySlider.maxValue = 300;
        this.verticallySlider.minValue = -300;
        this.verticallySlider.maxValue = 300;
      };
      this.setValues();
    });
    mobileViewService.checkPlaygroundHeight();

    this.setValues();
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
    this.currentPresetSubject.next(preset);
    if (preset === 'vanilla') {
      this.sizeSlider.currentValue = presets.vanillaTransform.size;
      this.horizontallySlider.currentValue = presets.vanillaTransform.hPos;
      this.verticallySlider.currentValue = presets.vanillaTransform.vPos;
      this.rotateSlider.currentValue = presets.vanillaTransform.rotate;
    } else if (preset === 'experimental') {
      this.sizeSlider.currentValue = presets.experimentalTransform.size;
      this.horizontallySlider.currentValue = presets.experimentalTransform.hPos;
      this.verticallySlider.currentValue = presets.experimentalTransform.vPos;
      this.rotateSlider.currentValue = presets.experimentalTransform.rotate;
    } else if (preset === 'random') {
      this.sizeSlider.currentValue = this.randomTransformPresets.randomSize();
      this.horizontallySlider.currentValue = this.randomTransformPresets.randomHPos();
      this.verticallySlider.currentValue = this.randomTransformPresets.randomVPos();
      this.rotateSlider.currentValue = this.randomTransformPresets.randomRotate();
    }
    if (this.onMobile) {
      this.sizeSlider.currentValue = Math.round(this.sizeSlider.currentValue / 2);
      if (this.sizeSlider.currentValue < 10) { this.sizeSlider.currentValue = 10; }
    } else {
      this.horizontallySlider.minValue = -300;
      this.horizontallySlider.maxValue = 300;
      this.verticallySlider.minValue = -300;
      this.verticallySlider.maxValue = 300;
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
