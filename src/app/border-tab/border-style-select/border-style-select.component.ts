import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BorderSettingsService } from 'src/app/services/border-settings.service';

@Component({
  selector: 'app-border-style-select',
  templateUrl: './border-style-select.component.html',
  styleUrls: ['./border-style-select.component.scss']
})
export class BorderStyleSelectComponent {
  @Output() valueChange = new EventEmitter<number>();

  constructor(private borderSettingsService: BorderSettingsService) { }

  border: {
    value: string,
    viewValue: string
  }[] = [
    {value: 'solid-0', viewValue: 'solid'},
    {value: 'dashed-1', viewValue: 'dashed'},
    {value: 'dotted-2', viewValue: 'dotted'}
  ];

  selectedData: {
    value: string,
    viewValue: string
  } = {
    value: '',
    viewValue: ''
  }

  selectedBorder = this.border[0].value;

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      viewValue: event.source.triggerValue
    };
    this.borderSettingsService.borderStyle = this.selectedData.viewValue
  }
}
