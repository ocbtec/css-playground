import { Component, HostListener } from '@angular/core';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent {
  screenHeight!: number;
  screenWidth!: number;

  playgroundSectionHeight! : number;
  playgroundInputHeight! : number;
  playgroundOutputHeight! : number;

  constructor(public colorSettingsService: ColorSettingsService) { }

  ngOnInit() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.setPlaygroundHeight();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.setPlaygroundHeight();
  }

  setPlaygroundHeight() {
    if (this.screenWidth > 1024) {
      this.playgroundSectionHeight = 700;
      this.playgroundInputHeight = 700;
      this.playgroundOutputHeight = 700;
    } else if (this.screenWidth <= 1024) {
      this.playgroundSectionHeight = this.screenHeight;
      this.playgroundInputHeight = this.screenHeight / 2;
      this.playgroundOutputHeight = this.screenHeight / 2;
    }
  }
}
