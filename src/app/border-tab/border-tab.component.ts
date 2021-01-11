import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
import { ColorEvent } from 'ngx-color';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BorderTabComponent implements OnInit {
  settingsType: string = 'Border';
  messageDynamic: string = 'Reset Border Settings';

  items: Slider[] = [];

  constructor(
    public borderSettingsService: BorderSettingsService,
    public colorSettingsService: ColorSettingsService
  ) { }

  ngOnInit(): void {
    this.borderSettingsService.initializeWidthSlider();
    this.borderSettingsService.initializeRadiusSlider();
    this.items = this.borderSettingsService.items;
  }

  handleChange($event: ColorEvent) {
    this.colorSettingsService.borderColor = $event.color.hex;
  }

}
