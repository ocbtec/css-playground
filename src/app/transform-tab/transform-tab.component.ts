import { Component, OnInit } from '@angular/core';
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

  constructor(private transformSettingsService: TransformSettingsService) { }

  ngOnInit() {
    this.transformSettingsService.initializeSliders();
    this.items = this.transformSettingsService.items;
  }
}
