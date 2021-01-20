import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BorderSettingsService } from '../services/border-settings.service';

@Component({
  selector: 'app-start-presets',
  templateUrl: './start-presets.component.html',
  styleUrls: ['./start-presets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartPresetsComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();

  border: {
    value: string;
    viewValue: string;
  }[] = [
    {value: 'dashed', viewValue: 'dashed'},
    {value: 'dotted', viewValue: 'dotted'},
    {value: 'double', viewValue: 'double'}
  ];

  selectedData: {
    value: string;
    viewValue: string;
  } = {
    value: '',
    viewValue: ''
  };

  constructor(public borderSettingsService: BorderSettingsService) { }

  ngOnInit() {
    this.borderSettingsService.borderStyle = this.border[0].value;
  }

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      viewValue: event.source.triggerValue
    };
    this.borderSettingsService.setStyle(this.selectedData.viewValue);
  }
}
