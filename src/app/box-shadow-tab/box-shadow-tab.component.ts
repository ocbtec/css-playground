import { Component } from '@angular/core';
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
export class BoxShadowTabComponent {
  settingsType = 'Box-Shadow';
  messageDynamic = 'Reset Box-Shadow Settings';

  items: Slider[] = [];

  boxShadowColor = '';
  boxShadowInset: boolean;

  mobileView: MobileViewService;

  constructor(
    private boxShadowSettingsService: BoxShadowSettingsService,
    private colorSettingsService: ColorSettingsService,
    private mobileViewService: MobileViewService
  ) {
    this.mobileView = this.mobileViewService;

    this.boxShadowSettingsService.initializeBoxShadowSettings();
    this.items = this.boxShadowSettingsService.items;
    this.boxShadowInset = this.boxShadowSettingsService.shadowInsetSwitch;

    const boxShadowColor = this.colorSettingsService.boxShadowColorSubject;
    boxShadowColor.subscribe(value => {
      this.boxShadowColor = value;
    });

    const boxShadowInset = this.boxShadowSettingsService.shadowInsetSubject;
    boxShadowInset.subscribe(value => {
      this.boxShadowInset = value;
    });
  }

  onChange() {
    this.boxShadowSettingsService.shadowInsetSwitch = !this.boxShadowSettingsService.shadowInsetSwitch;
    this.boxShadowSettingsService.shadowInsetSubject.next(this.boxShadowSettingsService.shadowInsetSwitch);
  }

  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }
}
