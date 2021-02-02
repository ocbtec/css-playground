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

  playgroundInputWidth!: string;

  setPlaygroundHeight() {
    this.checkAspectRatio();

    if (this.screenWidth > 1440 && this.screenWidth > this.screenHeight) {
      // landscape desktop screens >= 1366 x 720
      this.playgroundSectionHeight = 700;
      this.playgroundInputHeight = 700;
      this.playgroundOutputHeight = 700;
      this.playgroundInputWidth = 'width: 640px';
    } else if (this.screenWidth > 1024 && this.screenWidth <= 1440) {
      // portrait tablets
      this.playgroundSectionHeight = 700;
      this.playgroundInputHeight = 700;
      this.playgroundOutputHeight = 700;
      this.playgroundInputWidth = 'width: 482px';
      this.playgroundSectionHeight = this.playgroundInputHeight;
    } else if (this.screenWidth <= 1024 && this.screenWidth < this.screenHeight) {
      // portrait tablets and mobiles
      this.playgroundSectionHeight = this.screenHeight;
      this.playgroundInputHeight = this.screenHeight / 2;
      this.playgroundOutputHeight = this.screenHeight / 2;
      this.playgroundInputWidth = 'width: 100%';
    } else if (this.screenWidth <= 1024 && this.screenWidth > this.screenHeight) {
      // landscape tablets and mobiles
      this.playgroundSectionHeight = this.screenHeight;
      this.playgroundInputHeight = this.screenHeight;
      this.playgroundOutputHeight = this.screenHeight;
      this.playgroundInputWidth = 'width: 50%';
    }

    // prevent to stretch the playground hight too much
    if (this.playgroundSectionHeight > 1366 && this.portrait) {
      this.playgroundSectionHeight = 1366;
      this.playgroundInputHeight = this.playgroundSectionHeight / 2;
      this.playgroundOutputHeight = this.playgroundSectionHeight / 2;
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
    // check to assign correct css class
    if(this.smallScreen) {
      this.landscape = this.screenWidth > this.screenHeight;
      this.portrait = this.screenWidth < this.screenHeight;
    } else {
      this.landscape = false;
      this.portrait = false;
    }
  }
}
