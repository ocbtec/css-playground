import { Component, Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { Slider } from './slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() slider: Slider = {
    label: '',
    tabType: '',
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
