import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Slider } from '../slider/slider.model';
import { TransformPresetsVanilla, TransformPresetsExperimental, TransformPresetsRandom } from '../start-presets/start-presets';
import { MobileViewService } from './mobile-view.service';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  items: Slider[] = [];
  transformPresetVanilla = new TransformPresetsVanilla();
  transformPresetExperimental = new TransformPresetsExperimental();
  transformPresetRandom = new TransformPresetsRandom();

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

  constructor(private mobileViewService: MobileViewService) {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });

    this.mobileViewService.setPlaygroundHeight();

    this.mobileViewService.onMobileDeviceSubject.subscribe(onMobile => {
      this.onMobile = onMobile;
      if (this.onMobile) {
        if (this.sizeSlider.currentValue > 150) {
          this.sizeSlider.currentValue = 150;
        }
        if (this.sizeSlider.currentValue === 100) {
          this.sizeSlider.currentValue = 50;
        }
        if (this.horizontallySlider.currentValue > 150) {
          this.horizontallySlider.currentValue = 150;
        }
        if (this.horizontallySlider.currentValue < -150) {
          this.horizontallySlider.currentValue = -150;
        }
        if (this.verticallySlider.currentValue > 150) {
          this.verticallySlider.currentValue = 150;
        }
        if (this.verticallySlider.currentValue < -150) {
          this.verticallySlider.currentValue = -150;
        }
        this.sizeSlider.maxValue = 150;
        this.horizontallySlider.minValue = -150;
        this.horizontallySlider.maxValue = 150;
        this.verticallySlider.minValue = -150;
        this.verticallySlider.maxValue = 150;
      } else {
        if (this.sizeSlider.currentValue === 50) {
          this.sizeSlider.currentValue = 100;
        }
        this.sizeSlider.maxValue = 300;
        this.horizontallySlider.minValue = -300;
        this.horizontallySlider.maxValue = 300;
        this.verticallySlider.minValue = -300;
        this.verticallySlider.maxValue = 300;
      };
      this.setValues();
    });
    this.mobileViewService.checkPlaygroundHeight();

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
    } else if (preset === 'random') {
      this.sizeSlider.currentValue = this.transformPresetRandom.randomSize();
      this.horizontallySlider.currentValue = this.transformPresetRandom.randomHPos();
      this.verticallySlider.currentValue = this.transformPresetRandom.randomVPos();
      this.rotateSlider.currentValue = this.transformPresetRandom.randomRotate();
    }
    if (this.onMobile) {
      this.sizeSlider.currentValue = Math.round(this.sizeSlider.currentValue / 2);
      if (this.sizeSlider.currentValue < 10) { this.sizeSlider.currentValue = 10; }
      this.horizontallySlider.currentValue = Math.round(this.horizontallySlider.currentValue / 2);
      this.verticallySlider.currentValue = Math.round(this.verticallySlider.currentValue / 2);
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
