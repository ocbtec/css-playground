import { Component, OnInit } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
@Component({
  selector: 'app-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.scss']
})
export class BorderTabComponent implements OnInit {
  settingsType: string = 'Border';
  messageDynamic: string = 'Reset Border Settings';

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

  constructor(private borderSettingsService: BorderSettingsService) { }

  ngOnInit(): void {
    this.borderSettingsService.initializeSizeSlider();
    this.borderSettingsService.initializeMoveHorizontallySlider();
    this.items = this.borderSettingsService.items;
  }

}
