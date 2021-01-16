import { Component, HostListener } from '@angular/core';
import { MobileViewService } from '../services/mobile-view.service';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent {
  showArrowKeysMessage = true;

  constructor(public mobileViewService: MobileViewService) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.showArrowKeysMessage = this.mobileViewService.screenWidth <= 480 ? false : true;
  }
}
