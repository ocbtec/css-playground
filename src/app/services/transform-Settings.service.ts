import { Injectable } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Slider } from '../slider/slider.model';

@Injectable({
  providedIn: 'root'
})
export class TransformSettingsService {
  items: Slider[] = [];

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

  initializeSliders() {
    this.allSliders.subscribe(sliderArray => {
      this.items = [];
      sliderArray.map(slider => this.items.push(slider));
    });

    this.sizeSlider.currentValue = 100;
    this.horizontallySlider.currentValue = 0;
    this.verticallySlider.currentValue = 0;
    this.rotateSlider.currentValue = 0;

    this.sizeSliderSubject.next(this.sizeSlider);
    this.horizontallySliderSubject.next(this.horizontallySlider);
    this.verticallySliderSubject.next(this.verticallySlider);
    this.rotateSliderSubject.next(this.rotateSlider);
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

  resetTransformSettings() {
    this.initializeSliders();
  }
}
