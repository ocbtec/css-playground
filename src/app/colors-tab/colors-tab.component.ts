import { Component, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Subject } from 'rxjs';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-colors-tab',
  templateUrl: './colors-tab.component.html',
  styleUrls: ['./colors-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorsTabComponent {
  settingsType = 'Colors';
  messageDynamic = 'Reset Colors Settings';

  borderColorSubject: Subject<string>;
  borderColor = '';

  boxShadowColorSubject: Subject<string>;
  boxShadowColor = '';

  constructor(
    public colorSettingsService: ColorSettingsService,
    public boxShadowSettingsService: BoxShadowSettingsService,
    public mobileViewService: MobileViewService
  ) {
    this.borderColorSubject = this.colorSettingsService.borderColorSubject;
    this.borderColorSubject.subscribe(value => {
      this.borderColor = value;
    });
    this.boxShadowColorSubject = this.colorSettingsService.boxShadowColorSubject;
    this.boxShadowColorSubject.subscribe(value => {
      this.boxShadowColor = value;
    });
    this.colorSettingsService.initializeColors();
  }

  changeCubeColor($event: ColorEvent) {
    this.colorSettingsService.cubeColor = $event.color.hex;
  }
  changeBackgroundColor($event: ColorEvent) {
    this.colorSettingsService.backgroundColor = $event.color.hex;
  }
  changeBorderColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }
  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }
}
