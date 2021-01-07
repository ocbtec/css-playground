import { Component, OnInit } from '@angular/core';
import { TransformSettingsService } from '../services/transform-Settings.service';
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

  constructor(private transformSettingsService: TransformSettingsService) { }

  ngOnInit(): void {
    this.transformSettingsService.initializeSizeSlider();
    this.transformSettingsService.initializeMoveHorizontallySlider();
    this.transformSettingsService.initializeMoveVerticallySlider();
    this.transformSettingsService.initializeMoveRotateSlider();
    this.transformSettingsService.settingsType = 'Transform';
    this.transformSettingsService.messageDynamic = 'Reset Transform Settings';
    this.items = this.transformSettingsService.items;
  }

}
