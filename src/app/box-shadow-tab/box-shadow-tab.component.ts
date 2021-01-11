import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-box-shadow-tab',
  templateUrl: './box-shadow-tab.component.html',
  styleUrls: ['./box-shadow-tab.component.scss']
})
export class BoxShadowTabComponent implements OnInit {
  settingsType: string = 'Box-Shadow';
  messageDynamic: string = 'Reset Box-Shadow Settings';

  items: Slider[] = [];

  constructor(
    public boxShadowSettingsService: BoxShadowSettingsService,
    public colorSettingsService: ColorSettingsService
  ) { }

  ngOnInit(): void {
    this.boxShadowSettingsService.initializeOffsetXSlider();
    this.boxShadowSettingsService.initializeOffsetYSlider();
    this.boxShadowSettingsService.initializeBlurRadiusSlider();
    this.boxShadowSettingsService.initializeSpreadRadiusSlider();
    this.items = this.boxShadowSettingsService.items;
  }

  onChange() {
    this.boxShadowSettingsService.shadowInsetSwitch ? this.boxShadowSettingsService.shadowInset = 'inset' : this.boxShadowSettingsService.shadowInset = '';
  }

  handleChange($event: ColorEvent) {
    this.colorSettingsService.boxShadowColor = $event.color.hex;
  }
}
