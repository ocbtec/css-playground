import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent implements OnInit {
  @ViewChild('playground') playground!: ElementRef;
  showScrollButton = false;

  backgroundColor = '';

  mobileView: MobileViewService;

  constructor(
    colorSettingsService: ColorSettingsService,
    mobileViewService: MobileViewService
  ) {
    this.mobileView = mobileViewService;

    const colors = colorSettingsService.backgroundColorSubject;
    colors.subscribe(color => {
      this.backgroundColor = color;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileView.setPlaygroundHeight();
    this.mobileView.checkPlaygroundHeight();
    this.checkForScroll();
  }

  ngOnInit() {
    this.checkForScroll();
  }

  scrollToPlayground($element: any) {
    $element.scrollIntoView({ behavior: 'smooth' });
  }

  checkForScroll() {
    if (this.mobileView.screenWidth <= 1024) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
}
