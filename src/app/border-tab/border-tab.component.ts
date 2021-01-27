import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { Slider } from '../slider/slider.model';
import { ColorEvent } from 'ngx-color';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';

@Component({
  selector: 'app-border-tab',
  templateUrl: './border-tab.component.html',
  styleUrls: ['./border-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BorderTabComponent implements OnInit {
  @ViewChild('containerHeight') containerHeight!: ElementRef;
  containerHeightSubject = new Subject<number>();
  showScrollIndicator = false;

  settingsType = 'Border';
  messageDynamic = 'Reset Border Settings';

  items: Slider[] = [];

  borderColor = '';

  mobileView: MobileViewService;

  constructor(
    private borderSettingsService: BorderSettingsService,
    private colorSettingsService: ColorSettingsService,
    private mobileViewService: MobileViewService,
    settingsTab: SettingsTabComponent
  ) {
    this.mobileView = this.mobileViewService;

    const borderColor = this.colorSettingsService.borderColorSubject;
    borderColor.subscribe(value => {
      this.borderColor = value;
    });

    settingsTab.activeTabSubject.subscribe(activeTab => {
      if (activeTab === 'Border') { this.checkForScrollIndicator(); }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkForScrollIndicator();
  }

  ngOnInit() {
    this.borderSettingsService.initializeBorderSettings();
    this.items = this.borderSettingsService.items;
  }

  changeColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }

  checkForScrollIndicator() {
    this.containerHeightSubject.pipe(delay(0)).subscribe(() => {
      this.showScrollIndicator = this.containerHeight.nativeElement.scrollHeight + 48 > this.mobileView.playgroundInputHeight;
    });
    this.containerHeightSubject.next(this.containerHeight.nativeElement.scrollHeight);
  }
}
