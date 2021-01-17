import { Component } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-playground-output',
  templateUrl: './playground-output.component.html',
  styleUrls: ['./playground-output.component.scss']
})
export class PlaygroundOutputComponent {
  borderColorSubject: Subject<string>;
  borderColor = '';

  boxShadowColorSubject: Subject<string>;
  boxShadowColor = '';

  constructor(
    public transformSettingsService: TransformSettingsService,
    public borderSettingsService: BorderSettingsService,
    public boxShadowSettingsService: BoxShadowSettingsService,
    public colorSettingsService: ColorSettingsService
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
}
