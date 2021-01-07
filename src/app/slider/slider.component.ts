import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() label: string = '';
  @Input() slider: {
    id: string,
    minValue: number,
    maxValue: number,
    step: number,
    currentValue: number,
    unit: string
  } = {
    id: '',
    minValue: 0,
    maxValue: 0,
    step: 0,
    currentValue: 0,
    unit: ''
  }

  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  getSliderType(sliderEvent: MatSliderChange) {
    if (sliderEvent.value !== null) {
      this.slider.currentValue = sliderEvent.value;
      if (sliderEvent.source._elementRef.nativeElement.id === 'size') {
        this.changeSize(sliderEvent.value);
      }
      if (sliderEvent.source._elementRef.nativeElement.id === 'hMovement') {
        this.moveHorizontally(sliderEvent.value);
      }
      if (sliderEvent.source._elementRef.nativeElement.id === 'vMovement') {
        this.moveVertically(sliderEvent.value);
      }
      if (sliderEvent.source._elementRef.nativeElement.id === 'rotate') {
        this.rotate(sliderEvent.value);
      }
    }
  }

  changeSize(value: number) {
    this.settingsService.changeSize(value);
  }

  moveHorizontally(value: number) {
    this.settingsService.moveHorizontally(value);
  }

  moveVertically(value: number) {
    this.settingsService.moveVertically(value);
  }

  rotate(value: number) {
    this.settingsService.rotate(value);
  }

}
