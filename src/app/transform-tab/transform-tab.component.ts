import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';
import { Transform } from './transform.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  sliderType: Transform = {
    label: '',
    slider: {
      id: '',
      minValue: 0,
      maxValue: 0,
      step: 0,
      currentValue: 0,
      unit: ''
    }
  }
  items: Transform[] = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.initializeSizeSlider();
    this.settingsService.initializeMoveHorizontallySlider();
    this.settingsService.initializeMoveVerticallySlider();
    this.settingsService.initializeMoveRotateSlider();
    this.settingsService.settingsType = 'Transform';
    this.settingsService.messageDynamic = 'Reset Transform Settings';
    this.items = this.settingsService.items;
  }

}
