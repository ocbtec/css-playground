import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { StartPresetsService } from '../services/start-presets.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  styleUrls: ['./reset-buttons.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('default => rotated', animate('400ms linear'))
  ])
]
})
export class ResetButtonsComponent implements AfterViewInit {
  @Input() messageDynamic = '';
  @Input() settingsType = '';
  position: TooltipPosition = 'above';
  showDelay = 200;
  hideDelay = 200;
  messageDefault = 'Reset ALL Settings';


  state = 'default';
  stateSubject = new Subject<string>();

  constructor(
    private transformSettingsService: TransformSettingsService,
    private borderSettingsService: BorderSettingsService,
    private boxShadowSettingsService: BoxShadowSettingsService,
    private colorsSettingsService: ColorSettingsService,
    private startPreset: StartPresetsService,
    settingsTab: SettingsTabComponent
  ) {

    settingsTab.activeTabSubject.subscribe(() => {
      this.rotate();
      // this.stateSubject.next(this.state);
    });
    this.stateSubject.pipe(delay(0)).subscribe(currentState => {
      this.state = currentState;
      // console.log(currentState);

    });

  }

  ngAfterViewInit() {
    this.rotate();
    // this.stateSubject.next(this.state);

  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.stateSubject.next(this.state);
  }

  dynamicReset(event: any) {
    const resetTab = event.target.id;
    if (resetTab === 'Transform') {
      this.transformSettingsService.resetTransformSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Border') {
      this.borderSettingsService.resetBorderSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Box-Shadow') {
      this.boxShadowSettingsService.resetBoxShadowSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'Colors') {
      this.colorsSettingsService.resetAllColorSettings(this.startPreset.selectedPreset);
    } else if (resetTab === 'all') {
      this.transformSettingsService.resetTransformSettings(this.startPreset.selectedPreset);
      this.borderSettingsService.resetBorderSettings(this.startPreset.selectedPreset);
      this.boxShadowSettingsService.resetBoxShadowSettings(this.startPreset.selectedPreset);
      this.colorsSettingsService.resetAllColorSettings(this.startPreset.selectedPreset);
    }
  }
}
