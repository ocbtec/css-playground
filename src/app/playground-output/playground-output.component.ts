import { Component, OnInit } from '@angular/core';
import { TransformSettingsService } from '../services/transformSettings.service';

@Component({
  selector: 'app-playground-output',
  templateUrl: './playground-output.component.html',
  styleUrls: ['./playground-output.component.scss']
})
export class PlaygroundOutputComponent implements OnInit {

  constructor(public transformSettingsService: TransformSettingsService) { }

  ngOnInit(): void { }

}
