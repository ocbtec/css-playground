import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Subject } from 'rxjs';
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

  boxShadowColorSubject: Subject<string>;
  boxShadowColor = '';

  constructor(
    public boxShadowSettingsService: BoxShadowSettingsService,
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) {
    this.boxShadowColorSubject = this.colorSettingsService.boxShadowColorSubject;
    this.boxShadowColorSubject.subscribe(value => {
      this.boxShadowColor = value;
    });

    this.colorSettingsService.initializeColors();
  }

  ngOnInit() {
    this.boxShadowSettingsService.initializeSliders();
    this.items = this.boxShadowSettingsService.items;
  }

  onChange() {
    this.boxShadowSettingsService.shadowInset = this.boxShadowSettingsService.shadowInsetSwitch ? 'inset' : '';
  }

  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }
}
