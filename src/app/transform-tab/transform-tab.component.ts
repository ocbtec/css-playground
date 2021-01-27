import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MobileViewService } from '../services/mobile-view.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';
import { Slider } from '../slider/slider.model';

@Component({
  selector: 'app-transform-tab',
  templateUrl: './transform-tab.component.html',
  styleUrls: ['./transform-tab.component.scss']
})
export class TransformTabComponent implements OnInit {
  @ViewChild('containerHeight') containerHeight!: ElementRef;
  containerHeightSubject = new Subject<number>();
  showScrollIndicator = false;

  settingsType = 'Transform';
  messageDynamic = 'Reset Transform Settings';
  items: Slider[] = [];

  mobileView: MobileViewService;

  constructor(
    private transformSettingsService: TransformSettingsService,
    private mobileViewService: MobileViewService,
    settingsTab: SettingsTabComponent
  ) {
    this.mobileView = this.mobileViewService;

    settingsTab.activeTabSubject.subscribe(activeTab => {
      if (activeTab === 'Transform') { this.checkForScrollIndicator(); }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkForScrollIndicator();
  }

  ngOnInit() {
    this.transformSettingsService.initializeSliders();
    this.items = this.transformSettingsService.items;
  }

  checkForScrollIndicator() {
    this.containerHeightSubject.pipe(delay(0)).subscribe(() => {
      this.showScrollIndicator = this.containerHeight.nativeElement.scrollHeight + 48 > this.mobileView.playgroundInputHeight;
    });
    this.containerHeightSubject.next(this.containerHeight.nativeElement.scrollHeight);
  }
}
