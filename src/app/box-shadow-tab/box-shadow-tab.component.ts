import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-box-shadow-tab',
  templateUrl: './box-shadow-tab.component.html',
  styleUrls: ['./box-shadow-tab.component.scss']
})
export class BoxShadowTabComponent implements OnInit {
  settingsType = 'Box-Shadow';
  messageDynamic = 'Reset Box-Shadow Settings';

  items: Slider[] = [];

  constructor(
    public boxShadowSettingsService: BoxShadowSettingsService,
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) { }

  ngOnInit() {
    this.boxShadowSettingsService.initializeSliders();
    this.items = this.boxShadowSettingsService.items;
  }

  onChange() {
    this.boxShadowSettingsService.shadowInset = this.boxShadowSettingsService.shadowInsetSwitch ? 'inset' : '';
  }

  handleChange($event: ColorEvent) {
    this.colorSettingsService.boxShadowColor = $event.color.hex;
  }
}
