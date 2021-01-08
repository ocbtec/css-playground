import { Component, OnInit } from '@angular/core';
import { BorderSettingsService } from '../services/border-settings.service';
import { TransformSettingsService } from '../services/transform-Settings.service';

@Component({
  selector: 'app-playground-output',
  templateUrl: './playground-output.component.html',
  styleUrls: ['./playground-output.component.scss']
})
export class PlaygroundOutputComponent implements OnInit {

  constructor(
    public transformSettingsService: TransformSettingsService,
    public borderSettingsService: BorderSettingsService
  ) { }

  ngOnInit(): void { }

}
