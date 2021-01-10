import { Component } from '@angular/core';
import { ColorSettingsService } from './services/color-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public colorSettingsService: ColorSettingsService) { }
}
