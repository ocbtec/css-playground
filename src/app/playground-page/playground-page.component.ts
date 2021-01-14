import { Component, HostListener } from '@angular/core';
import { ColorSettingsService } from '../services/color-settings.service';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent {

  constructor(
    public colorSettingsService: ColorSettingsService,
    public mobileViewService: MobileViewService
  ) { }

  ngOnInit() {
    this.mobileViewService.setPlaygroundHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.mobileViewService.setPlaygroundHeight();
  }
}
