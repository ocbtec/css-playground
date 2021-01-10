import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-colors-tab',
  templateUrl: './colors-tab.component.html',
  styleUrls: ['./colors-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorsTabComponent implements OnInit {

  constructor(public colorSettingsService: ColorSettingsService) { }

  ngOnInit(): void {
  }

  changeCubeColor($event: ColorEvent) {
    this.colorSettingsService.cubeColor = $event.color.hex;
  }
  changeBackgroundColor($event: ColorEvent) {
    this.colorSettingsService.backgroundColor = $event.color.hex;
  }

}
