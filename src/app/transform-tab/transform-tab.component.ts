import { Component, OnInit } from '@angular/core';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  settingsType: string = 'Transform';
  messageDynamic: string = 'Reset Transform Settings';

  items: Slider[] = [];

  constructor(private transformSettingsService: TransformSettingsService) { }

  ngOnInit(): void {
    this.transformSettingsService.initializeSliders();
    this.items = this.transformSettingsService.items;
  }

}
