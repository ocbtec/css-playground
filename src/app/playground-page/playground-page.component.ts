import { Component, OnInit } from '@angular/core';
import { ColorSettingsService } from '../services/color-settings.service';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent implements OnInit {

  constructor(public colorSettingsService: ColorSettingsService) { }

  ngOnInit(): void {
  }

}
