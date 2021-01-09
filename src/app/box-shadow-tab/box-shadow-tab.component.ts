import { Component, OnInit } from '@angular/core';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-box-shadow-tab',
  templateUrl: './box-shadow-tab.component.html',
  styleUrls: ['./box-shadow-tab.component.scss']
})
export class BoxShadowTabComponent implements OnInit {
  settingsType: string = 'Box-Shadow';
  messageDynamic: string = 'Reset Box-Shadow Settings';
  shadowInset: boolean = false;

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

  constructor(private boxShadowSettingsService: BoxShadowSettingsService) { }

  ngOnInit(): void {
    this.boxShadowSettingsService.initializeOffsetXSlider();
    this.boxShadowSettingsService.initializeOffsetYSlider();
    this.boxShadowSettingsService.initializeBlurRadiusSlider();
    this.boxShadowSettingsService.initializeSpreadRadiusSlider();
    this.items = this.boxShadowSettingsService.items;
  }

  onChange() {
    this.shadowInset ? this.boxShadowSettingsService.shadowInset = 'inset' : this.boxShadowSettingsService.shadowInset = '';
  }
}
