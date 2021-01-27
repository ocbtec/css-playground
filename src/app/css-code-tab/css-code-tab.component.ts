import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CopyMessageComponent } from '../copy-message/copy-message.component';
import { PlaygroundOutputComponent } from '../playground-output/playground-output.component';
import { BorderSettingsService } from '../services/border-settings.service';
import { BoxShadowSettingsService } from '../services/box-shadow-settings.service';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';
import { TransformSettingsService } from '../services/transform-Settings.service';
import { SettingsTabComponent } from '../settings-tab/settings-tab.component';

@Component({
  selector: 'app-css-code-tab',
  templateUrl: './css-code-tab.component.html',
  styleUrls: ['./css-code-tab.component.scss']
})
export class CssCodeTabComponent extends PlaygroundOutputComponent {
  @ViewChild('containerHeight') containerHeight!: ElementRef;
  containerHeightSubject = new Subject<number>();
  showScrollIndicator = false;

  backgroundColor = '';
  cssCode = '';
  mobileView: MobileViewService;

  constructor(
    transformSettingsService: TransformSettingsService,
    borderSettingsService: BorderSettingsService,
    boxShadowSettingsService: BoxShadowSettingsService,
    colorSettingsService: ColorSettingsService,
    private _snackBar: MatSnackBar,
    private mobileViewService: MobileViewService,
    settingsTab: SettingsTabComponent
  ) {
    super(
      transformSettingsService,
      borderSettingsService,
      boxShadowSettingsService,
      colorSettingsService
    );
    this.mobileView = this.mobileViewService;

    const colors = colorSettingsService.allColors;
    colors.subscribe(colorArray => {
      this.backgroundColor = colorArray[1];
      this.createCodeString();
    });

    transformSettingsService.allSliders.subscribe(() => this.createCodeString());
    borderSettingsService.allSliders.subscribe(() => this.createCodeString());
    borderSettingsService.borderStyleSubject.subscribe(() => this.createCodeString());
    boxShadowSettingsService.allSliders.subscribe(() => this.createCodeString());
    boxShadowSettingsService.shadowInsetSubject.subscribe(() => this.createCodeString());

    colorSettingsService.initializeColors();

    settingsTab.activeTabSubject.subscribe(activeTab => {
      if (activeTab === 'CSS-Code') { this.checkForScrollIndicator(); }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkForScrollIndicator();
  }

  createCodeString() {
    this.cssCode =`.background {` + `\n` +
      `  background-color: ${this.backgroundColor};` + `\n` +
      `}` + `\n\n` +
      `.cube {` + `\n` +
      `  background-color: ${this.cubeColor};` + `\n` +
      `  width: ${this.size}px;` + `\n` +
      `  height: ${this.size}px;` + `\n` +
      `  border-width: ${this.borderWidth}px;` + `\n` +
      `  border-color: ${this.borderColor};` + `\n` +
      `  border-radius: ${this.borderRadius}%;` + `\n` +
      `  border-style: ${this.borderStyle};` + `\n` +
      `  transform: translate(${this.xPos}px, ${this.yPos}px) rotate(${this.rotate}deg);` + `\n` +
      `  box-shadow: ${this.boxShadowColor} ${this.shadowX}px ${this.shadowY}px` +
      ` ${this.shadowBlur}px ${this.shadowSpread}px${this.shadowInset};` + `\n` +
      `}`;
  }

  snackbar() {
    this._snackBar.openFromComponent(CopyMessageComponent, {
      duration: 1200
    });
  }

  checkForScrollIndicator() {
    this.containerHeightSubject.pipe(delay(0)).subscribe(() => {
      this.showScrollIndicator = this.containerHeight.nativeElement.scrollHeight + 48 > this.mobileView.playgroundInputHeight;
    });
    this.containerHeightSubject.next(this.containerHeight.nativeElement.scrollHeight);
  }
}
