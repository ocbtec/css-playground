import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  constructor(public borderSettingsService: BorderSettingsService) { }

  ngOnInit(): void {
    this.borderSettingsService.initializeWidthSlider();
    this.borderSettingsService.initializeRadiusSlider();
    this.items = this.borderSettingsService.items;
  }

  handleChange($event: ColorEvent) {
    this.borderSettingsService.borderColor = $event.color.hex;
  }

}
