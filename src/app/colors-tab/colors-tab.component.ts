import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';

@Component({
  selector: 'app-colors-tab',
  templateUrl: './colors-tab.component.html',
  styleUrls: ['./colors-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorsTabComponent implements AfterViewInit {
  @ViewChild('containerHeight') containerHeight!: ElementRef;
  containerHeightSubject = new Subject<number>();
  showScrollIndicator = false;

  settingsType = 'Colors';
  messageDynamic = 'Reset Colors Settings';

  cubeColor = '';
  backgroundColor = '';
  borderColor = '';
  boxShadowColor = '';

  colorArray: Array<string> = [];

  mobileView: MobileViewService;

  constructor(
    private colorSettingsService: ColorSettingsService,
    private mobileViewService: MobileViewService,
    settingsTab: SettingsTabComponent
  ) {
    this.mobileView = this.mobileViewService;

    const colors = this.colorSettingsService.allColors;
    colors.subscribe(colorArray => {
      this.colorArray = [];
      colorArray.map(color => this.colorArray.push(color));
      this.cubeColor = this.colorArray[0];
      this.backgroundColor = this.colorArray[1];
      this.borderColor = this.colorArray[2];
      this.boxShadowColor = this.colorArray[3];
    });

    settingsTab.activeTabSubject.subscribe(activeTab => {
      if (activeTab === 'Colors') { this.checkForScrollIndicator(); }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkForScrollIndicator();
  }

  ngAfterViewInit() {
    this.checkForScrollIndicator();
  }

  checkForScrollIndicator() {
    this.containerHeightSubject.pipe(delay(0)).subscribe(() => {
      this.showScrollIndicator = this.containerHeight.nativeElement.scrollHeight > this.mobileView.playgroundInputHeight;
    });
    this.containerHeightSubject.next(this.containerHeight.nativeElement.scrollHeight);
  }

  changeCubeColor($event: ColorEvent) {
    this.colorSettingsService.setCubeColor($event.color.hex);
  }
  changeBackgroundColor($event: ColorEvent) {
    this.colorSettingsService.setBackgroundColor($event.color.hex);
  }
  changeBorderColor($event: ColorEvent) {
    this.colorSettingsService.setBorderColor($event.color.hex);
  }
  changeBoxShadowColor($event: ColorEvent) {
    this.colorSettingsService.setBoxShadowColor($event.color.hex);
  }
}
