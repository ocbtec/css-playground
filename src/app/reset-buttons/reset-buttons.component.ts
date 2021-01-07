import { Component, Input, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-reset-buttons',
  templateUrl: './reset-buttons.component.html',
  styleUrls: ['./reset-buttons.component.scss']
})
export class ResetButtonsComponent implements OnInit {
  position: TooltipPosition = 'above';
  showDelay: number = 200;
  hideDelay: number = 200;
  messageDefault: string = 'Reset ALL Settings';
  @Input() messageDynamic: string = 'Reset Transform Settings';
  @Input() settingsType: string = 'Transform';

  constructor() { }

  ngOnInit(): void {
  }

}
