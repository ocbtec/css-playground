import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { SettingsService } from './../service/settings.service';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void { }

  getSliderValue(sliderEvent: MatSliderChange) {
    if (sliderEvent.value !== null) {
      this.settingsService.changeSize(sliderEvent.value);
    }
  }

}
