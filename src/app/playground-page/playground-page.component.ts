import { Component, HostListener, OnInit } from '@angular/core';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent implements OnInit {

  constructor(
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileViewService.setPlaygroundHeight();
  }

  ngOnInit() {
    this.mobileViewService.setPlaygroundHeight();
  }
}
