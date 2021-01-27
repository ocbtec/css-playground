import { Component, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsTabComponent {
  activeTabSubject = new Subject<string>();

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.activeTabSubject.next(tabChangeEvent.tab.textLabel);
  }
}
