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

  constructor(
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileViewService.setPlaygroundHeight();
    this.checkForScroll();
  }

  ngOnInit() {
    this.mobileViewService.setPlaygroundHeight();
    this.checkForScroll();
  }

  scrollToPlayground($element: any) {
    $element.scrollIntoView({ behavior: 'smooth' });
  }

  checkForScroll() {
    if (this.mobileViewService.screenWidth <= 480) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
}
