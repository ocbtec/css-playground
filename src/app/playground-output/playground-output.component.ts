import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-playground-output',
  templateUrl: './playground-output.component.html',
  styleUrls: ['./playground-output.component.scss']
})
export class PlaygroundOutputComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void { }

}
