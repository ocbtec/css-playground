import { Component, OnInit } from '@angular/core';
import { MobileViewService } from '../services/mobile-view.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  settingsType = 'Transform';
  messageDynamic = 'Reset Transform Settings';
  items: Slider[] = [];

  mobileView: MobileViewService;

  constructor(
    private transformSettingsService: TransformSettingsService,
    private mobileViewService: MobileViewService
  ) {
    this.mobileView = this.mobileViewService;
  }

  ngOnInit() {
    this.transformSettingsService.initializeSliders();
    this.items = this.transformSettingsService.items;
  }
}
