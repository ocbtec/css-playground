import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-box-shadow-tab',
  templateUrl: './box-shadow-tab.component.html',
  styleUrls: ['./box-shadow-tab.component.scss']
})
export class BoxShadowTabComponent implements OnInit {
  @ViewChild('containerHeight') containerHeight!: ElementRef;
  containerHeightSubject = new Subject<number>();
  showScrollIndicator = false;

  settingsType = 'Box-Shadow';
  messageDynamic = 'Reset Box-Shadow Settings';

  items: Slider[] = [];

  boxShadowColor = '';
  boxShadowInset: boolean;

  mobileView: MobileViewService;

  constructor(
    private boxShadowSettingsService: BoxShadowSettingsService,
    private colorSettingsService: ColorSettingsService,
    private mobileViewService: MobileViewService,
    settingsTab: SettingsTabComponent
  ) {
    this.mobileView = this.mobileViewService;

    this.boxShadowSettingsService.initializeBoxShadowSettings();
    this.items = this.boxShadowSettingsService.items;
    this.boxShadowInset = this.boxShadowSettingsService.shadowInsetSwitch;

    const boxShadowColor = this.colorSettingsService.boxShadowColorSubject;
    boxShadowColor.subscribe(value => {
      this.boxShadowColor = value;
    });

    const boxShadowInset = this.boxShadowSettingsService.shadowInsetSubject;
    boxShadowInset.subscribe(value => {
      this.boxShadowInset = value;
    });

    settingsTab.activeTabSubject.subscribe(activeTab => {
      if (activeTab === 'Box-Shadow') { this.checkForScrollIndicator(); }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkForScrollIndicator();
  }

  ngOnInit() {
    this.boxShadowSettingsService.setValues();
  }

  onChange() {
    this.boxShadowSettingsService.shadowInsetSwitch = !this.boxShadowSettingsService.shadowInsetSwitch;
    this.boxShadowSettingsService.shadowInsetSubject.next(this.boxShadowSettingsService.shadowInsetSwitch);
  }

  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }

  checkForScrollIndicator() {
    this.containerHeightSubject.pipe(delay(0)).subscribe(() => {
      this.showScrollIndicator = this.containerHeight.nativeElement.scrollHeight + 48 > this.mobileView.playgroundInputHeight;
    });
    this.containerHeightSubject.next(this.containerHeight.nativeElement.scrollHeight);
  }
}
