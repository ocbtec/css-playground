import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
import { ColorEvent } from 'ngx-color';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { Subject } from 'rxjs';

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

  borderColorSubject: Subject<string>;
  borderColor = '';

  constructor(
    public borderSettingsService: BorderSettingsService,
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) {
    this.borderColorSubject = this.colorSettingsService.borderColorSubject;
    this.borderColorSubject.subscribe(value => {
      this.borderColor = value;
    });
    this.colorSettingsService.initializeColors();
  }

  ngOnInit() {
    this.borderSettingsService.initializeSliders();
    this.items = this.borderSettingsService.items;
  }

  changeColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }

}
