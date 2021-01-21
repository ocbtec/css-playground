import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
import { ColorEvent } from 'ngx-color';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BorderTabComponent implements OnInit {
  settingsType = 'Border';
  messageDynamic = 'Reset Border Settings';

  items: Slider[] = [];

  borderColor = '';

  mobileView: MobileViewService;

  constructor(
    private borderSettingsService: BorderSettingsService,
    private colorSettingsService: ColorSettingsService,
    private mobileViewService: MobileViewService
  ) {
    this.mobileView = this.mobileViewService;

    const borderColor = this.colorSettingsService.borderColorSubject;
    borderColor.subscribe(value => {
      this.borderColor = value;
    });
  }

  ngOnInit() {
    this.borderSettingsService.initializeBorderSettings();
    this.items = this.borderSettingsService.items;
  }

  changeColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }
}
