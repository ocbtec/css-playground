import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SettingsService } from './../service/settings.service';
import { Transform } from './transform.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  sliderType: Transform = {
    label: '',
    slider: {
      id: '',
      minValue: 0,
      maxValue: 0,
      step: 0,
      startValue: 0,
      currentValue: 0,
      unit: ''
    }
  }

  items: Transform[] = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void { }

  getSliderValue(sliderEvent: MatSliderChange) {
    if (sliderEvent.value !== null) {
      this.settingsService.changeSize(sliderEvent.value);
    }
  }

}
