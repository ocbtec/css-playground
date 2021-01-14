import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileViewService {
  screenHeight!: number;
  screenWidth!: number;

  playgroundSectionHeight! : number;
  playgroundInputHeight! : number;
  playgroundOutputHeight! : number;

  setPlaygroundHeight() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

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
