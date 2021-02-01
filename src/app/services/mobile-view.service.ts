import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileViewService {
  screenHeight!: number;
  screenWidth!: number;
  onMobileDevice = false;
  onMobileDeviceSubject: Subject<boolean> = new Subject<boolean>();
  smallScreen = false;
  landscape = false;
  portrait = false;

  playgroundSectionHeight!: number;
  playgroundInputHeight!: number;
  playgroundOutputHeight!: number;

  setPlaygroundHeight() {
    this.checkAspectRatio();

    if (this.screenWidth >= 1366 && this.screenWidth > this.screenHeight) {
      this.playgroundSectionHeight = 700;
      this.playgroundInputHeight = 700;
      this.playgroundOutputHeight = 700;
    } else if (this.screenWidth <= 1024 && this.screenWidth < this.screenHeight) {
      this.playgroundSectionHeight = this.screenHeight;
      this.playgroundInputHeight = this.screenHeight / 2;
      this.playgroundOutputHeight = this.screenHeight / 2;
    } else if (this.screenWidth <= 1024 && this.screenWidth > this.screenHeight) {
      this.playgroundSectionHeight = this.screenHeight;
      this.playgroundInputHeight = this.screenHeight;
      this.playgroundOutputHeight = this.screenHeight;
    }
  }

  checkPlaygroundHeight() {
    if (this.screenWidth < 560 || this.screenHeight < 560) {
      this.onMobileDevice = true;
      this.onMobileDeviceSubject.next(this.onMobileDevice);
    } else {
      this.onMobileDevice = false;
      this.onMobileDeviceSubject.next(this.onMobileDevice);
    }
  }

  checkAspectRatio() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    this.smallScreen = this.screenWidth <= 1024;

    if(this.smallScreen) {
      this.landscape = this.screenWidth > this.screenHeight;
      this.portrait = this.screenWidth < this.screenHeight;
    } else {this.landscape = false;
      this.portrait = false;
    }
  }
}
