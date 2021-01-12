import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BorderSettingsService } from 'src/app/services/border-settings.service';

@Component({
  selector: 'app-border-style-select',
  templateUrl: './border-style-select.component.html',
  styleUrls: ['./border-style-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BorderStyleSelectComponent implements OnInit {
  @Output() valueChange = new EventEmitter<number>();

  border: {
    value: string;
    viewValue: string;
  }[] = [
    {value: 'dashed', viewValue: 'dashed'},
    {value: 'dotted', viewValue: 'dotted'},
    {value: 'double', viewValue: 'double'},
    {value: 'groove', viewValue: 'groove'},
    {value: 'hidden', viewValue: 'hidden'},
    {value: 'inset', viewValue: 'inset'},
    {value: 'none', viewValue: 'none'},
    {value: 'outset', viewValue: 'outset'},
    {value: 'ridge', viewValue: 'ridge'},
    {value: 'solid', viewValue: 'solid'}
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
    this.borderSettingsService.borderStyle = this.border[9].value;
  }

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      viewValue: event.source.triggerValue
    };
    this.borderSettingsService.borderStyle = this.selectedData.viewValue;
  }
}
