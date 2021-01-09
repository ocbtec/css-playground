import { Component, OnInit } from '@angular/core';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  settingsType: string = 'Transform';
  messageDynamic: string = 'Reset Transform Settings';

  sliderType: Slider = {
    label: '',
    slider: {
      id: '',
      minValue: 0,
      maxValue: 0,
      step: 0,
      currentValue: 0,
      unit: ''
    }
  }
  items: Slider[] = [];

  constructor(private transformSettingsService: TransformSettingsService) { }

  ngOnInit(): void {
    this.transformSettingsService.initializeSizeSlider();
    this.transformSettingsService.initializeMoveHorizontallySlider();
    this.transformSettingsService.initializeMoveVerticallySlider();
    this.transformSettingsService.initializeMoveRotateSlider();
    this.items = this.transformSettingsService.items;
  }

}
