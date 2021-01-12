import { Component, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() label = '';
  @Input() slider: {
    id: string;
    minValue: number;
    maxValue: number;
    step: number;
    currentValue: number;
    unit: string;
  } = {
    id: '',
    minValue: 0,
    maxValue: 0,
    step: 0,
    currentValue: 0,
    unit: ''
  };

  getSliderType(sliderEvent: MatSliderChange) {
    if (sliderEvent.value !== null) {
      this.slider.currentValue = sliderEvent.value;
    }
  }
}
